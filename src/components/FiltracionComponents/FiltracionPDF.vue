<template>
  <div class="d-flex justify-content-center my-2">
    <button
      @click="generatePDF"
      class="btn btn-bd-primary"
    ><i class="bi bi-filetype-pdf"></i> Generar PDF
    </button>
  </div>
</template>
<style scoped>
.btn-outline-danger{
  --bs-btn-border-radius: 2rem;
}
.btn-bd-primary {
  --bs-btn-border-radius: 2rem;
  --bs-btn-font-weight: bold;
  --bs-btn-color: #f41b35;
  --bs-btn-bg: #effffb;
  --bs-btn-border-color: #f41b35;
  --bs-btn-hover-color: #effffb;;
  --bs-btn-hover-bg: #f41b35;
  --bs-btn-hover-border-color: #f41b35;
  --bs-btn-active-color: #effffb;
  --bs-btn-active-bg: #f41b35;
  --bs-btn-active-border-color: #f41b35;
}
</style>
<script>
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { mapGetters } from "vuex";
export default {
  name: "FiltracionPDF",
  props: {
    svgData: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(
      {
        microplastics: "getMicroplastics",
        residues: "getResidues",
        timeUnits: "getTimeUnits",
        onFilterValues: "getOnFilterValues",
        releasedValues: "getReleasedValues",
      },
    ),
    lastOnFilterValue() {
      const lastOnFilter = this.onFilterValues[this.onFilterValues.length - 1]
      return lastOnFilter;
    },
    lastReleasedValue() {
      const lastReleased = this.releasedValues[this.releasedValues.length - 1]
      return lastReleased;
    },
  },
  methods: {
    generatePDF() {
      const pdf = new jsPDF();
      const img = new Image();
      const self = this;

      img.onload = function () {
        var pageWidth = pdf.internal.pageSize.getWidth();
        var pageHeight = pdf.internal.pageSize.getHeight();

        var left = 10;
        var top = 10;
        var right = 10;
        var bottom = 10;

        pdf.setDrawColor("50d890");
        pdf.setLineWidth(0.5);

        pdf.line(left, top, pageWidth - right, top);
        pdf.line(left, pageHeight - bottom, pageWidth - right, pageHeight - bottom);
        pdf.line(left, top, left, pageHeight - bottom);
        pdf.line(pageWidth - right, top, pageWidth - right, pageHeight - bottom);

        pdf.setFontSize(24);
        pdf.setTextColor("#50d890");
        pdf.setFont("Helvetica", "bold");
        var textWidth = pdf.getStringUnitWidth("Reporte de resultados") * pdf.internal.getFontSize() / pdf.internal.scaleFactor;
        var xCoordinate = (pageWidth - textWidth) / 2;
        pdf.text("Reporte de resultados", xCoordinate, 20);

        pdf.setFontSize(12);
        pdf.setTextColor("#272727");
        pdf.setFont("Courier", "normal");
        pdf.text("Técnica de limpieza: Filtración granular rápida.", 20, 30);

        pdf.setFontSize(18);
        pdf.setTextColor("#4f98ca");
        pdf.setFont("Helvetica", "bold");
        textWidth = pdf.getStringUnitWidth("Datos de entrada") * pdf.internal.getFontSize() / pdf.internal.scaleFactor;
        xCoordinate = (pageWidth - textWidth) / 2;
        pdf.text("Datos de entrada", xCoordinate, 40);

        pdf.setFontSize(12);
        pdf.setTextColor("#272727");
        pdf.setFont("Courier", "normal");
        pdf.text("\u2022  Microplásticos: " + self.microplastics.toString() + " mg", 20, 50);
        pdf.text("\u2022  Residuos: " + self.residues.toString() + " mg", 20, 60);
        pdf.text("\u2022  Días: " + self.timeUnits.toString() + " días", 20, 70);

        pdf.setFontSize(18);
        pdf.setTextColor("#4f98ca");
        pdf.setFont("Helvetica", "bold");
        textWidth = pdf.getStringUnitWidth("Simulación gráfica") * pdf.internal.getFontSize() / pdf.internal.scaleFactor;
        xCoordinate = (pageWidth - textWidth) / 2;
        pdf.text("Simulación gráfica", xCoordinate, 80);

        pdf.setFontSize(8);
        pdf.setTextColor("#4f98ca");
        pdf.setFont("Courier", "bold");
        pdf.text("% microplásticos en filtro -----", 20, 85);

        pdf.setFontSize(8);
        pdf.setTextColor("#50d890");
        pdf.setFont("Courier", "bold");
        pdf.text("% microplásticos sueltos en el río -----", 20, 89);
        
        const canvas = document.createElement("canvas");
        const canvasWidth = 672;
        const canvasHeight = 403.2;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        const context = canvas.getContext("2d");
        context.drawImage(img, 0, 0);
        const imgData = canvas.toDataURL("image/png");
        xCoordinate = (pageWidth - 150) / 2;
        pdf.addImage(imgData, "PNG", xCoordinate, 90, 150, 90);

        pdf.setFontSize(18);
        pdf.setTextColor("#4f98ca");
        pdf.setFont("Helvetica", "bold");
        textWidth = pdf.getStringUnitWidth("Explicación") * pdf.internal.getFontSize() / pdf.internal.scaleFactor;
        xCoordinate = (pageWidth - textWidth) / 2;
        pdf.text("Explicación", xCoordinate, 190);
        
        pdf.setFontSize(12);
        pdf.setTextColor("#272727");
        pdf.setFont("Courier", "normal")
        
        pdf.text("Se pueden observar en la simulación dos líneas: cada una representa", 20, 200);
        pdf.text("el  porcentaje acumulado de microplásticos; en el caso de la  línea", 20, 205);
        pdf.text("azul,  aquellos que son contenidos por el filtro; mientras  que  la", 20, 210);
        pdf.text("verde  corresponde a los que escapan y terminan en algún cuerpo  de", 20, 215);
        pdf.text("agua, como lo puede ser un río, en este caso. Cada día, se pasa por", 20, 220);
        pdf.text("el filtro la cantidad de microplásticos especificada de " + self.microplastics + ".", 20, 225);
        pdf.text("Sumado a eso, pueden llegar a ocurrir fluctuaciones en los  valores", 20, 235);
        pdf.text("cada día, por lo que se añade una cantidad de microplásticos  extra", 20, 240);
        pdf.text("que  llamaremos 'residuos', que ayudará a simular esas  variaciones", 20, 245);
        pdf.text("multiplicándola por un valor aleatorio por día, pero se tomará como", 20, 250);
        pdf.text("base el valor introducido para los residuos de " + self.residues + ".", 20, 255);

        pdf.text("De esa manera, el valor resultante de cada día corresponde a un por", 20, 265);
        pdf.text("ciento:  ya que si se suman ambos porcentajes del mismo  día,  dará", 20, 270);
        pdf.text("100%  para el primer día, 200% para el segundo y así  sucesivamente", 20, 275);
        pdf.text("hasta el día " + self.timeUnits + " indicado.", 20, 280);

        pdf.addPage();

        pdf.line(left, top, pageWidth - right, top);
        pdf.line(left, pageHeight - bottom, pageWidth - right, pageHeight - bottom);
        pdf.line(left, top, left, pageHeight - bottom);
        pdf.line(pageWidth - right, top, pageWidth - right, pageHeight - bottom);

        pdf.text("Generalmente, el porcentaje acumulado del filtro debe ser mayor  al", 20, 20);
        pdf.text("del río, sin embargo, este comportamiento puede no darse en  algún ", 20, 25);
        pdf.text("o algunos días. El porcentaje acumulado final para el filtro y para", 20, 30);
        pdf.text("el río son " + self.lastOnFilterValue.toFixed(2) +"% y " + self.lastReleasedValue.toFixed(2) + "%, respectivamente.", 20, 35);

        pdf.setFontSize(18);
        pdf.setTextColor("#4f98ca");
        pdf.setFont("Helvetica", "bold");
        textWidth = pdf.getStringUnitWidth("Tabla de resultados") * pdf.internal.getFontSize() / pdf.internal.scaleFactor;
        xCoordinate = (pageWidth - textWidth) / 2;
        pdf.text("Tabla de resultados", xCoordinate, 45);
        autoTable(pdf, {
          html: "#tableResults",
          startY: 55,
          tableWidth: "auto",
          margin: 50,
          headStyles: { halign: 'center', fillColor: "#50d890"},
          bodyStyles: { halign: 'center'},
        });
        pdf.save("ReporteFiltracion.pdf");
      };
      img.src = "data:image/svg+xml," + encodeURIComponent(this.svgData);
    },
  },
};
</script>