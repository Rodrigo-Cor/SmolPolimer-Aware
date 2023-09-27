<template>
  <div>
    <AwarenessForm :questions="finalQuestions" :typeQuestion="'final'" />
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
            "Después de haber utilizado la aplicación, ¿Qué nivel de familiaridad consideras que obtuviste con el término microplásticos?",
          options: [
            { option: "Nada", value: 0 },
            { option: "Ligeramente", value: 1 },
            { option: "Moderadamente", value: 2 },
            { option: "Mucho", value: 3 },
            { option: "Extremadamente", value: 4 },
          ],
        },
        {
          question:
            "Después de revisar la aplicación ¿Cómo ha cambiado tu percepción sobre el impacto de estas partículas sobre ecosistemas acuáticos? ",
          options: [
            { option: "No del todo cambio", value: 0 },
            { option: "Ligeramente cambio", value: 1 },
            { option: "Moderamente cambio", value: 2 },
            { option: "Considerablemente cambio", value: 3 },
            { option: "Extremadamente cambio", value: 4 },
          ],
        },
        {
          question:
            "Después de utilizar la aplicación ¿Qué nivel de preocupación consideras los efectos que pueden producir los microplásticos en los seres acuáticos?",
          options: [
            { option: "No del todo preocupante", value: 0 },
            { option: "Ligeramente preocupante", value: 1 },
            { option: "Moderadamente preocupante", value: 2 },
            { option: "Muy preocupante", value: 3 },
            { option: "Extremadamente preocupante", value: 4 },
          ],
        },
        {
          question:
            "Una vez que terminó de revisar la aplicación ¿Qué tan probable es que reduzca su consumo de productos plásticos?",
          options: [
            { option: "No probable ", value: 0 },
            { option: "Algo improbable", value: 1 },
            { option: "Neutral", value: 2 },
            { option: "Algo probable", value: 3 },
            { option: "Muy probable", value: 4 },
          ],
        },
        {
          question:
            "Después de haber utilizado la aplicación ¿Qué nivel de conciencia tienes sobre este la presencia de este problema de contaminación mundial?",
          options: [
            { option: "No del todo consciente", value: 0 },
            { option: "Ligeramente consciente", value: 1 },
            { option: "Algo consciente", value: 2 },
            { option: "Moderadamente consciente", value: 3 },
            { option: "Extremadamente consciente", value: 4 },
          ],
        },
        {
          question:
            "Después de revisar la información presentada en la aplicación ¿Cambiarías tus hábitos como consumidor para reducir el uso de artículos compuesto por polímeros?",
          options: [
            { option: "No", value: 0 },
            { option: "Si", value: 1 },
          ],
        },
        {
          question:
            "Después de haber utilizado la aplicación ¿Estaría dispuesto a compartir la información que aprendió con otros para tomar conciencia sobre la contaminación por microplásticos?",
          options: [
            { option: "No", value: 0 },
            { option: "Si", value: 1 },
          ],
        },
      ],
    };
  },
};
</script>
