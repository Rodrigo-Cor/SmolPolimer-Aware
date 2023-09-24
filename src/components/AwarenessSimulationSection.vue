<template>
  <div>
    <!--
    <AwarenessForm :questions="finalQuestions" :typeQuestion="'final'" />
    -->
  </div>
</template>

<script>
import AwarenessForm from "@/components/AwarenessForm.vue";

export default {
  name: "AwarenessSimulationSection",
  components: {
    AwarenessForm,
  },
  data() {
    return {
      finalQuestions: [
        {
          question:
            "¿En qué medida ha aumentado su comprensión sobre los riesgos de contaminación por microplásticos?",
          options: [
            { option: "Nada", value: 0 },
            { option: "Ligeramente", value: 1 },
            { option: "Moderadamente", value: 2 },
            { option: "Mucho", value: 3 },
            { option: "Extremadamente", value: 4 },
          ],
          recomendation: "Ayuda 0",
        },
        {
          question:
            "¿Cómo ha cambiado su sentido de responsabilidad respecto a abordar la contaminación por microplásticos en el agua?",
          options: [
            { option: "Nada responsable", value: 0 },
            { option: "Poco responsable", value: 1 },
            { option: "Moderadamente responsable", value: 2 },
            { option: "Muy responsable", value: 3 },
            { option: "Absolutamente responsable", value: 4 },
          ],
          recomendation: "Ayuda 1",
        },
        {
          question:
            "¿En qué medida considera que la interacción con el simulador gráfico ha influido en su comprensión de las técnicas de limpieza de microplásticos?",
          options: [
            { option: "Nada influyente", value: 0 },
            { option: "Ligeramente influyente", value: 1 },
            { option: "Algo influyente", value: 2 },
            { option: "Muy influyente", value: 3 },
            { option: "Extremadamente influyente", value: 4 },
          ],
          recomendation: "Ayuda 2",
        },
        {
          question:
            "¿Qué probabilidad considera que tienen la aplicación de influir en sus hábitos para reducir la contaminación por microplásticos?",
          options: [
            { option: "No probable ", value: 0 },
            { option: "Algo improbable", value: 1 },
            { option: "Neutral", value: 2 },
            { option: "Algo probable", value: 3 },
            { option: "Muy probable", value: 4 },
          ],
          recomendation: "Ayuda 3",
        },
        {
          question:
            "¿Estaría dispuesto a compartir la información que aprendió con otros para aumentar la conciencia sobre la contaminación por microplásticos?",
          options: [
            { option: "Totalmente en desacuerdo", value: 0 },
            { option: "Moderadamente en desacuerdo", value: 1 },
            { option: "Neutral", value: 2 },
            { option: "Moderadamente a favor", value: 3 },
            { option: "Totalmente a favor", value: 4 },
          ],
          recomendation: "Ayuda 4",
        },
        {
          question:
            "¿Siente interés en conocer más acerca de los riesgos de la contaminación por microplásticos en el agua?",
          options: [
            { option: "No", value: 0 },
            { option: "Si", value: 1 },
          ],
          recomendation: "Ayuda 5",
        },
        {
          question:
            "¿Estaría dispuesto a cambiar sus hábitos para reducir el uso de plásticos?",
          options: [
            { option: "No", value: 0 },
            { option: "Si", value: 1 },
          ],
          recomendation: "Ayuda 6",
        },
      ],
    };
  },
};
</script>