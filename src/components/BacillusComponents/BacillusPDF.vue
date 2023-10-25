<template>
  <div class="d-flex justify-content-center my-2">
    <button
      @click="generatePDF"
      class="btn btn-bd-primary "
    ><i class="bi bi-filetype-pdf"></i> Generar PDF
    </button>
  </div> 
</template>
<style scoped>
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
        var text0= "Técnica de limpieza: Degradación por bacterias "
        var textWidth0 = pdf.getTextWidth(text0);
        pdf.text(text0, 20, 30);
        pdf.setFont("Courier", "italic");
        pdf.text("Bacillus", 20 + textWidth0 + 1 , 30);

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
        pdf.text("(1 - p)^t, donde t son los bimestres,  p  es  el  porcentaje  de", 20,225);
        pdf.text("limpieza y n son los miligramos de microplásticos. Se  introdujo", 20, 230);
        pdf.text("'" + self.microplastics + " mg'  de  cantidad inicial para  degradar, siendo el primer", 20, 235);
        pdf.text("valor en el bimestre 0, la cual irá degradándose hasta  terminar", 20, 240);
        pdf.text("la cantidad especificada de bimestres de " + self.timeUnits + ". La temperatura a la", 20, 245);
        pdf.text("que se sometieron fue de 30°C, alimentando a las bacterias de la", 20, 250);
        var text1= "cepa "
        var textWidth1 = pdf.getTextWidth(text1);
        pdf.text(text1, 20, 255);
        pdf.setFont("Courier", "italic");
        pdf.text(self.strain, 20 + textWidth1 + 1 , 255);
        var textWidth2 = pdf.getTextWidth(self.strain)
        pdf.setFont("Courier", "normal");
        var text3 = " con "
        pdf.text(text3, 20 + textWidth1 + 1 + textWidth2 + 1, 255);
        var textWidth3 = pdf.getTextWidth(text3)
        pdf.text(self.growthMedium + ", aportando un porcentaje", 20 + textWidth1 + 1 + textWidth2 + 1 + textWidth3 + 1, 255);
        pdf.text("de " + self.percentage + "%  de efectividad por bimestre, dando " + self.lastDegradatedValue.toFixed(2).toString() + "  mg  finales. ", 20, 260);
        
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
          tableWidth: "auto",
          margin: 50,
          headStyles: { halign: 'center', fillColor: "#50d890"},
          bodyStyles: { halign: 'center'},
        });
        pdf.save("ReporteBacillus.pdf");
      };
      img.src = "data:image/svg+xml," + encodeURIComponent(this.svgData);
    },
  },
};
</script>