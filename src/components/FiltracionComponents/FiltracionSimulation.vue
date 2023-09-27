<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 text-center my-2">
      <h2 id="myTitle">Simulación</h2>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-md-6 col-sm-12 text-center">
      <span id="myFilter">Microplásticos en filtro -----</span>
    </div>
    <div class="col-md-6 col-sm-12 text-center">
      <span id="myReleased">Microplásticos sueltos en el río -----</span>
    </div>
  </div>  
  <div class="row justify-content-center">
    <div class="col-12 text-center my-2">
      <div ref="containerRef"></div>
      <div id="chart-container"></div>
    </div>
  </div>
</div>    
</template>
<style scoped>
#myTitle{
    border-style: solid;
    border-color: #4f98ca;
    border-radius: 1rem;
    font-size: 1.7rem;
    font-weight: bold;
    color: #4f98ca;
}
#myFilter{
    font-size: 1rem;
    font-weight: bold;
    color: #4f98ca; 
}
#myReleased{
    font-size: 1rem;
    font-weight: bold;
    color: #50d890;
}
</style>
<script>
import * as d3 from "d3";
import { mapGetters} from 'vuex';
export default {
  name: "FiltracionSimulation",
  data () {
    return {
      isFullscreen : false,
    };
  },
  mounted () {
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
  },
  computed: {
    ...mapGetters(['getOnFilterValues', 'getReleasedValues']),
    onFilterValues() {
      return this.getOnFilterValues;
    },
    releasedValues() {
      return this.getReleasedValues;
    },
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

      x.domain([1, this.onFilterValues.length]);
      y.domain([d3.min(this.onFilterValues.concat(this.releasedValues)), d3.max(this.onFilterValues.concat(this.releasedValues))]);

      svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg.append("g")
        .call(d3.axisLeft(y))
      var lineFilter = d3.line()
        .x((d, i) => x(i + 1))
        .y(d => y(d));
      
      var lineReleased = d3.line()
        .x((d, i) => x(i + 1))
        .y(d => y(d));

      var pathFilter = svg.append("path")
        .datum(this.onFilterValues)
        .attr("fill", "none")
        .attr("stroke", "#4f98ca")
        .attr("stroke-width", 2)
        .attr("d", lineFilter);

      var totalLengthFilter = pathFilter.node().getTotalLength();

      pathFilter
        .attr("stroke-dasharray", totalLengthFilter + " " + totalLengthFilter)
        .attr("stroke-dashoffset", totalLengthFilter)
        .transition()
        .duration(2000)
        .attr("stroke-dashoffset", 0);

      var pathReleased = svg.append("path")
        .datum(this.releasedValues)
        .attr("fill", "none")
        .attr("stroke", "#50d890")
        .attr("stroke-width", 2)
        .attr("d", lineReleased);

      var totalLengthReleased = pathReleased.node().getTotalLength();

      pathReleased
        .attr("stroke-dasharray", totalLengthReleased + " " + totalLengthReleased)
        .attr("stroke-dashoffset", totalLengthReleased)
        .transition()
        .duration(2000)
        .attr("stroke-dashoffset", 0);
      
        svg.append("g")
          .attr("class", "grid")
          .attr("transform", `translate(0,${height})`)
          .attr("stroke", "#1e1e1e")
          .attr("stroke-width", .5)
          .call(d3.axisBottom(x)
            .tickSize(-height)
            .tickFormat("")
          );

        svg.append("g")
          .attr("class", "grid")
          .attr("stroke", "#1e1e1e")
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
          .attr("y", (margin.left / 2) - 75)
          .attr("text-anchor", "middle")
          .text("Microplásticos");
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