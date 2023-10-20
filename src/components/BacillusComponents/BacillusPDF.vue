<template>
  <div class="d-flex justify-content-center my-2 animate__animated animate__heartBeat">
    <button
      @click="generatePDF"
      class="btn btn-outline-danger"
    ><i class="bi bi-filetype-pdf"></i> Generar PDF
    </button>
  </div> 
</template>
<style scoped>
.btn-outline-danger{
  --bs-btn-border-radius: 2rem;
}
</style>
<script>
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { mapGetters } from "vuex";
export default {
  name: "BacillusPDF",
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
        timeUnits: "getTimeUnits",
        growthMedium: "getGrowthMedium",
        strain: "getStrain",
        percentage: "getPercentage",
        degradatedValues: "getDegradatedValues"
      },
    ),
    lastDegradatedValue() {
      const lastElement = this.degradatedValues[this.degradatedValues.length - 1]
      return lastElement;
    }
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
        pdf.text("Técnica de limpieza: Degradación por bacterias Bacillus.", 20, 30);

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
        pdf.text("\u2022  Bimestres: " + self.timeUnits.toString() + " bimestres", 20, 60);
        pdf.text("\u2022  Porcentaje de degradación: " + self.percentage.toString() + "%", 20, 70);
        pdf.text("\u2022  Cepa de la bacteria: ", 20, 80);
        pdf.setFont("Courier", "italic");
        pdf.text(self.strain, 80, 80);
        pdf.setFont("Courier", "normal");
        pdf.text("\u2022  Medio de cultivo: " + self.growthMedium, 20, 90);

        pdf.setFontSize(18);
        pdf.setTextColor("#4f98ca");
        pdf.setFont("Helvetica", "bold");
        textWidth = pdf.getStringUnitWidth("Simulación gráfica") * pdf.internal.getFontSize() / pdf.internal.scaleFactor;
        xCoordinate = (pageWidth - textWidth) / 2;
        pdf.text("Simulación gráfica", xCoordinate, 100);

        pdf.setFontSize(8);
        pdf.setTextColor("#4f98ca");
        pdf.setFont("Courier", "bold");
        pdf.text("Microplásticos -----", 20, 105);

        const canvas = document.createElement("canvas");
        const canvasWidth = 672;
        const canvasHeight = 403.2;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        const context = canvas.getContext("2d");
        context.drawImage(img, 0, 0);
        const imgData = canvas.toDataURL("image/png");
        xCoordinate = (pageWidth - 150) / 2;
        pdf.addImage(imgData, "PNG", xCoordinate, 110, 150, 90);

        pdf.setFontSize(18);
        pdf.setTextColor("#4f98ca");
        pdf.setFont("Helvetica", "bold");
        textWidth = pdf.getStringUnitWidth("Explicación") * pdf.internal.getFontSize() / pdf.internal.scaleFactor;
        xCoordinate = (pageWidth - textWidth) / 2;
        pdf.text("Explicación", xCoordinate, 210);
        
        pdf.setFontSize(12)
        pdf.setTextColor("#272727")
        pdf.setFont("Courier", "normal")
        pdf.text("En la simulación gráfica, se ve reflejada la fórmula: C(t) = n *", 20, 220);
        pdf.text("(1 - p)^t, donde t son los bimestres, p es el porcentaje de", 20,225);
        pdf.text("limpieza y n es el número de microplásticos. Se introdujeron " + self.microplastics, 20, 230);
        pdf.text("microplásticos como cantidad inicial, reflejados en la gráfica", 20, 235);
        pdf.text("como el primer valor de la línea, en el bimestre 0, que irán", 20, 240);
        pdf.text("degradándose hasta terminar la cantidad especificada de bimestres", 20, 245);
        pdf.text("de " + self.timeUnits + ". La temperatura a la que se sometieron es de 30°C,", 20, 250);
        var text1= "alimentando a las bacterias de la cepa "
        var textWidth1 = pdf.getTextWidth(text1);
        pdf.text(text1, 20, 255);
        pdf.setFont("Courier", "italic");
        pdf.text(self.strain, 20 + textWidth1 + 1 , 255);
        var textWidth2 = pdf.getTextWidth(self.strain)
        pdf.setFont("Courier", "normal");
        pdf.text(" con", 20 + textWidth1 + 1 + textWidth2 + 1, 255);
        pdf.text(self.growthMedium + ", que tiene un porcentaje de degradación por bimestre", 20, 260);
        pdf.text("de " + self.percentage + "%, dando una cantidad de microplásticos final de " + self.lastDegradatedValue.toFixed(2).toString() + ". En", 20, 265);
        pdf.text("la siguiente tabla, se encuentran los valores con los que fue", 20, 270);
        pdf.text("graficada la simulación.", 20, 275)
        
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
        pdf.save("ReporteBacillus.pdf");
      };
      img.src = "data:image/svg+xml," + encodeURIComponent(this.svgData);
    },
  },
};
</script>