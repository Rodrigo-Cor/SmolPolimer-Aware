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
        // Datos de la muestra y dimensiones de la gráfica
        const data1 = this.values.map((value, index) => ({
          months: index + 1,
          value,
        }));

        // Obtener las dimensiones de la gráfica
        const container = this.$refs.containerRef;
        const containerWidth = container.clientWidth;
        const containerHeight = containerWidth * 0.6; // Adjust the aspect ratio as needed

        // Limpia el contenido ya existente
        container.innerHTML = "";

        // Verifica si está en modo pantalla completa
        const fullscreenWidth = window.innerWidth;
        const fullscreenHeight = window.innerHeight;
        const isFullscreen =
          containerWidth === fullscreenWidth &&
          containerHeight === fullscreenHeight;

        // Actualiza el estado isFullscreen
        this.isFullscreen = isFullscreen;

        // Calcula las dimensiones de la gráfica
        const margin = { top: 20, right: 20, bottom: 30, left: 50 };
        const width = isFullscreen
          ? fullscreenWidth - margin.left - margin.right
          : containerWidth - margin.left - margin.right;
        const height = isFullscreen
          ? fullscreenHeight - margin.top - margin.bottom
          : containerHeight - margin.top - margin.bottom;

        // Crea el contenedor SVG
        const svg = d3
          .select(container)
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom);

        // Crea las escalas
        const xScale = d3
          .scaleLinear()
          .domain([1, data1.length])
          .range([margin.left, width - margin.right]);
        const yScale = d3
          .scaleLinear()
          .domain([0, d3.max([...data1], (d) => d.value)])
          .range([height - margin.bottom, margin.top]);

        // Crea los generadores de línea
        const line1 = d3
          .line()
          .x((d) => xScale(d.months))
          .y((d) => yScale(d.value));

        // Agrega los caminos de las línea
        svg
          .append("path")
          .datum(data1)
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 2)
          .attr("d", line1);

        // Animación del dibujo de la línea
        const totalLength1 = svg
          .select("path:nth-child(1)")
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

        // Añade eje de las x
        svg
          .append("g")
          .attr("transform", `translate(0, ${height - margin.bottom})`)
          .call(d3.axisBottom(xScale));

        // Añade eje de las y
        svg
          .append("g")
          .attr("transform", `translate(${margin.left}, 0)`)
          .call(d3.axisLeft(yScale));

        // Añade cuadrícula
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

        // Añade la etiqueta "Tiempo" al eje de las x
        svg
          .append("text")
          .attr("x", width / 2)
          .attr("y", height + margin.bottom)
          .attr("text-anchor", "middle")
          .text("Tiempo");

        // Añade la etiqueta Microplásticos al eje de las y
        svg
          .append("text")
          .attr("transform", "rotate(-90)")
          .attr("x", -height / 2)
          .attr("y", margin.left / 2)
          .attr("text-anchor", "middle")
          .text("Microplasticos");
        //Etiqueta de unidades para el eje y
        svg
          .append("text")
          .attr("x", margin.left - 10)
          .attr("y", margin.top - 10)
          .attr("text-anchor", "start")
          .attr("class", "axis-label")
          .text("n");
        //Etiqueta de unidades para el eje x
        svg
          .append("text")
          .attr("x", width - margin.right)
          .attr("y", height - margin.bottom + 30)
          .attr("text-anchor", "end")
          .attr("class", "axis-label")
          .text("Meses");
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

<style scoped>
#progressing-chart-container {
  width: 100%;
  height: 0;
  padding-bottom: 60%;
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
