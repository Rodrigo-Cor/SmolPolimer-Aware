<template>
  <div id="progressing-chart"></div>
</template>
<script>
import * as d3 from "d3";
export default {
  mounted() {
    this.createProgressingChart();
  },
  methods: {
    createProgressingChart() {
      // Sample data
      const data1 = [
        { date: "2023-01-01", value: 48 },
        { date: "2023-02-01", value: 92 },
        { date: "2023-03-01", value: 16 },
        { date: "2023-04-01", value: 77 },
        { date: "2023-05-01", value: 39 },
        { date: "2023-06-01", value: 5 },
        { date: "2023-07-01", value: 83 },
      ];

      const data2 = [
        { date: "2023-01-01", value: 71 },
        { date: "2023-02-01", value: 12 },
        { date: "2023-03-01", value: 56 },
        { date: "2023-04-01", value: 32 },
        { date: "2023-05-01", value: 88 },
        { date: "2023-06-01", value: 62 },
        { date: "2023-07-01", value: 21 },
      ];

      // Chart dimensions
      const width = 500;
      const height = 300;
      const margin = { top: 20, right: 20, bottom: 30, left: 50 };

      // Create SVG container
      const svg = d3
        .select("#progressing-chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
      //rem y em
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
    },
  },
};
</script>

<style>
#progressing-chart {
  background-color: #f5f5f5;
}
</style>
