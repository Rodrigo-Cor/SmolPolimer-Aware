<template>
  <div id="progressing-chart-container" ref="containerRef">
    <div id="progressing-chart"></div>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  data() {
    return {
      isFullscreen: false,
    };
  },
  props: {
    values: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.createProgressingChart();
    this.observeContainerResize();
    document.addEventListener("fullscreenchange", this.handleFullscreenChange);
  },
  watch: {
    values: {
      immediate: true,
      handler() {
        this.createProgressingChart();
      },
    },
  },
  beforeUnmount() {
    this.unobserveContainerResize();
    document.removeEventListener(
      "fullscreenchange",
      this.handleFullscreenChange
    );
  },
  methods: {
    createProgressingChart() {
      if (this.values !== null && typeof this.values !== "undefined") {
        // Sample data and chart dimensions
        const data1 = this.values.map((value, index) => ({
          date: `2023-0${index + 1}-01`,
          value,
        }));

        const data2 = this.values.map((value, index) => ({
          date: `2023-0${index + 1}-01`,
          value,
        }));

        // Get the container dimensions
        const container = this.$refs.containerRef;
        const containerWidth = container.clientWidth;
        const containerHeight = containerWidth * 0.6; // Adjust the aspect ratio as needed

        // Clear existing content
        container.innerHTML = "";

        // Check if in fullscreen mode
        const fullscreenWidth = window.innerWidth;
        const fullscreenHeight = window.innerHeight;
        const isFullscreen =
          containerWidth === fullscreenWidth &&
          containerHeight === fullscreenHeight;

        // Update isFullscreen state
        this.isFullscreen = isFullscreen;

        // Calculate chart dimensions
        const margin = { top: 20, right: 20, bottom: 30, left: 50 };
        const width = isFullscreen
          ? fullscreenWidth - margin.left - margin.right
          : containerWidth - margin.left - margin.right;
        const height = isFullscreen
          ? fullscreenHeight - margin.top - margin.bottom
          : containerHeight - margin.top - margin.bottom;

        // Create SVG container
        const svg = d3
          .select(container)
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom);

        // Create scales
        const xScale = d3
          .scaleTime()
          .domain([
            new Date(data1[0].date),
            new Date(data1[data1.length - 1].date),
          ])
          .range([margin.left, width - margin.right]);

        const yScale = d3
          .scaleLinear()
          .domain([0, d3.max([...data1, ...data2], (d) => d.value)])
          .range([height - margin.bottom, margin.top]);

        // Create line generators
        const line1 = d3
          .line()
          .x((d) => xScale(new Date(d.date)))
          .y((d) => yScale(d.value));

        const line2 = d3
          .line()
          .x((d) => xScale(new Date(d.date)))
          .y((d) => yScale(d.value));

        // Append line paths
        svg
          .append("path")
          .datum(data1)
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 2)
          .attr("d", line1);

        svg
          .append("path")
          .datum(data2)
          .attr("fill", "none")
          .attr("stroke", "green")
          .attr("stroke-width", 2)
          .attr("d", line2);

        // Animate line drawing
        const totalLength1 = svg
          .select("path:nth-child(1)")
          .node()
          .getTotalLength();
        const totalLength2 = svg
          .select("path:nth-child(2)")
          .node()
          .getTotalLength();

        svg
          .select("path:nth-child(1)")
          .attr("stroke-dasharray", `${totalLength1} ${totalLength1}`)
          .attr("stroke-dashoffset", totalLength1)
          .transition()
          .duration(2000)
          .ease(d3.easeLinear)
          .attr("stroke-dashoffset", 0);

        svg
          .select("path:nth-child(2)")
          .attr("stroke-dasharray", `${totalLength2} ${totalLength2}`)
          .attr("stroke-dashoffset", totalLength2)
          .transition()
          .duration(2000)
          .ease(d3.easeLinear)
          .attr("stroke-dashoffset", 0);

        // Append x axis
        svg
          .append("g")
          .attr("transform", `translate(0, ${height - margin.bottom})`)
          .call(d3.axisBottom(xScale));

        // Append y axis
        svg
          .append("g")
          .attr("transform", `translate(${margin.left}, 0)`)
          .call(d3.axisLeft(yScale));

        // Append gridlines
        const makeXGridlines = () => d3.axisBottom(xScale);
        const makeYGridlines = () => d3.axisLeft(yScale);

        svg
          .append("g")
          .attr("class", "grid")
          .attr("transform", `translate(0, ${height - margin.bottom})`)
          .call(
            makeXGridlines()
              .tickSize(-height + margin.bottom)
              .tickFormat("")
          );

        svg
          .append("g")
          .attr("class", "grid")
          .attr("transform", `translate(${margin.left}, 0)`)
          .call(
            makeYGridlines()
              .tickSize(-width + margin.left)
              .tickFormat("")
          );

        // Append x label
        svg
          .append("text")
          .attr("x", width / 2)
          .attr("y", height - margin.bottom)
          .attr("text-anchor", "middle")
          .text("Time");

        // Append y label
        svg
          .append("text")
          .attr("transform", "rotate(-90)")
          .attr("x", -height / 2)
          .attr("y", margin.left / 2)
          .attr("text-anchor", "middle")
          .text("Microplastics");
      }
    },
    observeContainerResize() {
      const container = this.$refs.containerRef;
      this.resizeObserver = new ResizeObserver(() => {
        this.createProgressingChart();
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
        this.createProgressingChart();
      }
    },
  },
};
</script>

<style>
#progressing-chart-container {
  width: 100%;
  height: 0;
  padding-bottom: 60%; /* Adjust the aspect ratio as needed */
  position: relative;
}

#progressing-chart {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

.grid line {
  stroke: lightgray;
  stroke-opacity: 0.7;
  shape-rendering: crispEdges;
}

.grid path {
  stroke-width: 0;
}
</style>
