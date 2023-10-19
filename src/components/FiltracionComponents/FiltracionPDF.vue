<template>
  <div class="d-flex justify-content-center my-2 animate__animated animate__bounceIn animate__delay-2s">
    <button
      @click="generatePDF"
      class="btn btn-outline-danger btn-lg"
    >Generar PDF
    </button>
  </div>
</template>
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
      },
    ),
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
        pdf.text("\u2022  Microplásticos: " + self.microplastics.toString() + " microplásticos", 20, 50);
        pdf.text("\u2022  Residuos: " + self.residues.toString() + " microplásticos", 20, 60);
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
        pdf.text("Microplásticos en filtro -----", 20, 85);

        pdf.setFontSize(8);
        pdf.setTextColor("#50d890");
        pdf.setFont("Courier", "bold");
        pdf.text("Microplásticos sueltos en el río -----", 20, 89);
        
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
        
        const explanation = document.querySelector("#explanation");

        const textLines = pdf
          .setFontSize(12)
          .setTextColor("#272727")
          .setFont("Courier", "normal")
          .splitTextToSize(
            explanation.innerText,
            pageWidth - left - right - 20
          );
        pdf.text(textLines, 20, 200);

        pdf.addPage();

        pdf.line(left, top, pageWidth - right, top);
        pdf.line(left, pageHeight - bottom, pageWidth - right, pageHeight - bottom);
        pdf.line(left, top, left, pageHeight - bottom);
        pdf.line(pageWidth - right, top, pageWidth - right, pageHeight - bottom);

        pdf.setFontSize(18);
        pdf.setTextColor("#4f98ca");
        pdf.setFont("Helvetica", "bold");
        textWidth = pdf.getStringUnitWidth("Tabla de resultados") * pdf.internal.getFontSize() / pdf.internal.scaleFactor;
        xCoordinate = (pageWidth - textWidth) / 2;
        pdf.text("Tabla de resultados", xCoordinate, 20);

        autoTable(pdf, {
          html: "#tableResults",
          startY: 30,
        });
        pdf.save("ReporteFiltracion.pdf");
      };
      img.src = "data:image/svg+xml," + encodeURIComponent(this.svgData);
    },
  },
};
</script>