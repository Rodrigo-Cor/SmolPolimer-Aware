<template>
  <div class="container-fluid" style="background-color: white; border-radius: 1rem;">
    <h2 class="section-subtitle text-center my-2 animate__animated animate__flash">Simulación</h2>
    <p class="filteredTag text-center">% Microplásticos en filtro -----</p>
    <p class="releasedTag text-center">% Microplásticos sueltos en el río -----</p>
    <div class="col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-12">
      <div ref="containerRef"></div>
      <div id="chart-container"></div>
      <div id="chartPDF-container"></div>
    </div>
    <div class="d-flex justify-content-center my-2">
      <Popper class="popper-box" arrow content="Controla en cuántos segundos se redibuja la simulación" placement="top"
        hover>
        <button class="btn btn-bd-info btn-sm mb-2"><i class="bi bi-lightbulb"></i></button>
      </Popper>
    </div>
    <div class="d-flex justify-content-center my-2">
      <label class="my-label" for="simulationTimeInput">Velocidad de redibujado</label>
    </div>
    <div class="d-flex justify-content-center my-2">
      <input v-model="simulationTime" type="range" min="1" max="10" class="slider" id="simulationTimeInput"
        name="simulationTimeInput">
    </div>
    <div class="d-flex justify-content-center my-2">
      <span> {{ simulationTime }} {{ simulationTime != 1 ? "segundos" : "segundo" }}</span>
    </div>
  </div>
</template>
<style scoped>
.filteredTag {
  font-size: 1rem;
  font-weight: bold;
  color: #4f98ca;
}

.releasedTag {
  font-size: 1rem;
  font-weight: bold;
  color: #50d890;
}

.btn-bd-info {
  --bs-btn-border-radius: 2rem;
  --bs-btn-color: #50d890;
  --bs-btn-bg: #272727;
  --bs-btn-border-color: #272727;
  --bs-btn-hover-color: #272727;
  --bs-btn-hover-bg: #50d890;
  --bs-btn-hover-border-color: #50d890;
  --bs-btn-active-color: #272727;
  --bs-btn-active-bg: #50d890;
  --bs-btn-active-border-color: #50d890;
}

.popper-box {
  --popper-theme-background-color: #272727;
  --popper-theme-background-color-hover: #272727;
  --popper-theme-text-color: #effffb;
  --popper-theme-border-width: 0rem;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 1rem;
  --popper-theme-padding: 0.8rem;
  --popper-theme-box-shadow: 0 0.375rem 1.875rem -0.375rem rgba(39, 39, 39, 0.25);
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  border-radius: 1rem;
  height: 1rem;
  background: #272727;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .5s;
  transition: opacity .5s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  border-radius: 1rem;
  width: 1.2rem;
  height: 1.2rem;
  background: #50d890;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 1.2rem;
  height: 1.2rem;
  background: #50d890;
  cursor: pointer;
}

.my-label {
  font-size: 1rem;
  font-weight: bold;
  color: #4f98ca;
}
</style>
<script>
import * as d3 from "d3";
import Popper from "vue3-popper";
import { mapGetters } from 'vuex';
export default {
  name: "FiltracionSimulation",
  components: {
    Popper
  },
  data() {
    return {
      isFullscreen: false,
      simulationTime: 2,
    };
  },
  mounted() {
    if (this.$refs.containerRef) {
      this.createChart();
    };
    this.observeContainerResize();
    document.addEventListener("fullscreenchange", this.handleFullscreenChange);
  },
  beforeUnmount() {
    this.unobserveContainerResize();
    document.removeEventListener(
      "fullscreenchange",
      this.handleFullscreenChange
    );
  },
  watch: {
    getOnFilterValues() {
      this.createChart();
    },
    getReleasedValues() {
      this.createChart();
    },
    simulationTime() {
      this.createChart();
    }
  },
  computed: {
    ...mapGetters({ getOnFilterValues: "getOnFilterValues", getReleasedValues: "getReleasedValues" }),
  },
  methods: {
    createChart() {
      d3.select("#chart-container").select("svg").remove();

      var container = this.$refs.containerRef;
      var containerWidth = container.clientWidth;
      var containerHeight = containerWidth * 0.6;

      container.HTML = "";
      var margin = { top: 20, right: 75, bottom: 75, left: 75 };
      const fullscreenWidth = window.innerWidth;
      const fullscreenHeight = window.innerHeight;
      const isFullscreen =
        containerWidth === fullscreenWidth &&
        containerHeight === fullscreenHeight;
      this.isFullscreen = isFullscreen;

      const width = isFullscreen
        ? fullscreenWidth - margin.left - margin.right
        : containerWidth - margin.left - margin.right;
      const height = isFullscreen
        ? fullscreenHeight - margin.top - margin.bottom
        : containerHeight - margin.top - margin.bottom;
      var x = d3.scaleLinear()
        .range([0, width]);
      var y = d3.scaleLinear()
        .range([height, 0]);

      var svg = d3.select("#chart-container")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "#272727");

      x.domain([1, this.getOnFilterValues.length]);
      y.domain([d3.min(this.getOnFilterValues.concat(this.getReleasedValues)), d3.max(this.getOnFilterValues.concat(this.getReleasedValues))]);

      svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg.append("g")
        .call(d3.axisLeft(y));
      var lineFilter = d3.line()
        .x((d, i) => x(i + 1))
        .y(d => y(d));

      var lineReleased = d3.line()
        .x((d, i) => x(i + 1))
        .y(d => y(d));

      var pathFilter = svg.append("path")
        .datum(this.getOnFilterValues)
        .attr("fill", "none")
        .attr("stroke", "#4f98ca")
        .attr("stroke-width", 2)
        .attr("d", lineFilter);

      var totalLengthFilter = pathFilter.node().getTotalLength();

      pathFilter
        .attr("stroke-dasharray", totalLengthFilter + " " + totalLengthFilter)
        .attr("stroke-dashoffset", totalLengthFilter)
        .transition()
        .duration(this.simulationTime * 1000)
        .attr("stroke-dashoffset", 0);

      var pathReleased = svg.append("path")
        .datum(this.getReleasedValues)
        .attr("fill", "none")
        .attr("stroke", "#50d890")
        .attr("stroke-width", 2)
        .attr("d", lineReleased);

      var totalLengthReleased = pathReleased.node().getTotalLength();

      pathReleased
        .attr("stroke-dasharray", totalLengthReleased + " " + totalLengthReleased)
        .attr("stroke-dashoffset", totalLengthReleased)
        .transition()
        .duration(this.simulationTime * 1000)
        .attr("stroke-dashoffset", 0);

      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom - 25)
        .attr("text-anchor", "middle")
        .text("Días");

      svg
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", - height / 2)
        .attr("y", (margin.left / 2) - 90)
        .attr("text-anchor", "middle")
        .text("Porcentaje");

      this.createChartForPDF();
    },
    createChartForPDF() {
      d3.select("#chartPDF-container").select("svg").remove();
      var margin = { top: 20, right: 75, bottom: 75, left: 75 };
      const width = 522;
      const height = 308.2;

      var x = d3.scaleLinear()
        .range([0, width]);
      var y = d3.scaleLinear()
        .range([height, 0]);

      var svg = d3.select("#chartPDF-container")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      x.domain([1, this.getOnFilterValues.length]);
      y.domain([d3.min(this.getOnFilterValues.concat(this.getReleasedValues)), d3.max(this.getOnFilterValues.concat(this.getReleasedValues))]);

      svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg.append("g")
        .call(d3.axisLeft(y));

      var lineFilter = d3.line()
        .x((d, i) => x(i + 1))
        .y(d => y(d));

      var lineReleased = d3.line()
        .x((d, i) => x(i + 1))
        .y(d => y(d));

      svg.append("path")
        .datum(this.getOnFilterValues)
        .attr("fill", "none")
        .attr("stroke", "#4f98ca")
        .attr("stroke-width", 2)
        .attr("d", lineFilter);

      svg.append("path")
        .datum(this.getReleasedValues)
        .attr("fill", "none")
        .attr("stroke", "#50d890")
        .attr("stroke-width", 2)
        .attr("d", lineReleased);

      svg.append("g")
        .attr("class", "grid")
        .attr("transform", `translate(0,${height})`)
        .attr("stroke", "#272727")
        .attr("stroke-width", .5)
        .call(d3.axisBottom(x)
          .tickSize(-height)
          .tickFormat("")
        );

      svg.append("g")
        .attr("class", "grid")
        .attr("stroke", "#272727")
        .attr("stroke-width", .5)
        .call(d3.axisLeft(y)
          .tickSize(-width)
          .tickFormat("")
        );

      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom - 25)
        .attr("text-anchor", "middle")
        .text("Días");

      svg
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", - height / 2)
        .attr("y", (margin.left / 2) - 90)
        .attr("text-anchor", "middle")
        .text("Porcentaje");

      const svgElement = document.querySelector("#chartPDF-container svg")
      const svgString = new XMLSerializer().serializeToString(svgElement);
      this.$emit('chart-obtained', svgString);
      d3.select("#chartPDF-container").select("svg").remove();
    },
    observeContainerResize() {
      const container = this.$refs.containerRef;
      this.resizeObserver = new ResizeObserver(() => {
        this.createChart();
      });
      this.resizeObserver.observe(container);
    },
    unobserveContainerResize() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    },
    handleFullscreenChange() {
      if (!document.fullscreenElement) {
        this.isFullscreen = false;
        this.createChart();
      }
    },
  },
};
</script>