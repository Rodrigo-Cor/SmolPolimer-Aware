<template>
  <AwarenessForm :questions="finalQuestions" :typeQuestion="'final'" />
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
            "¿Qué tan frecuentemente has escuchado este término de microplásticos?",
          options: [
            { option: "Nada", value: 0 },
            { option: "Un poco", value: 1 },
            { option: "Algo", value: 2 },
            { option: "Moderadamente", value: 3 },
            { option: "Extremadamente", value: 4 },
          ],
        },
        {
          question:
            "¿Cómo ha cambiado tu nivel de prioridad sobre el impacto de estas partículas sobre ecosistemas acuáticos?",
          options: [
            { option: "Nada", value: 0 },
            { option: "Un poco", value: 1 },
            { option: "Algo", value: 2 },
            { option: "Moderadamente", value: 3 },
            { option: "Extremadamente", value: 4 },
          ],
        },
        {
          question:
            "¿Qué nivel de preocupación consideras los efectos que pueden producir los microplásticos en los seres acuáticos?",
          options: [
            { option: "Nada", value: 0 },
            { option: "Un poco", value: 1 },
            { option: "Algo", value: 2 },
            { option: "Moderadamente", value: 3 },
            { option: "Extremadamente", value: 4 },
          ],
        },
        {
          question:
            "¿En qué nivel has reducido tu frecuencia en la compra de productos de plástico?",
          options: [
            { option: "Nada", value: 0 },
            { option: "Un poco", value: 1 },
            { option: "Algo", value: 2 },
            { option: "Moderadamente", value: 3 },
            { option: "Extremadamente", value: 4 },
          ],
        },
        {
          question:
            "¿Qué tanto cambió tu nivel de conciencia sobre la contaminación por microplásticos en México?",
          options: [
            { option: "Nada", value: 0 },
            { option: "Un poco", value: 1 },
            { option: "Algo", value: 2 },
            { option: "Moderadamente", value: 3 },
            { option: "Extremadamente", value: 4 },
          ],
        },
        {
          question: "¿Ya te diste cuenta de que consumiste microplásticos?",
          options: [
            { option: "Nada", value: 0 },
            { option: "Un poco", value: 1 },
            { option: "Algo", value: 2 },
            { option: "Moderadamente", value: 3 },
            { option: "Extremadamente", value: 4 },
          ],
        },
        {
          question:
            "¿Identificaste alguna técnica de limpieza de microplásticos en el agua?",
          options: [
            { option: "Nada", value: 0 },
            { option: "Un poco", value: 1 },
            { option: "Algo", value: 2 },
            { option: "Moderadamente", value: 3 },
            { option: "Extremadamente", value: 4 },
          ],
        },
        {
          question:
            "¿La información te sirvió para crearte hábitos de reducción de consumo de productos plásticos?",
          options: [
            { option: "Nada", value: 0 },
            { option: "Un poco", value: 1 },
            { option: "Algo", value: 2 },
            { option: "Moderadamente", value: 3 },
            { option: "Extremadamente", value: 4 },
          ],
        },
      ],
    };
  },
};
</script>
