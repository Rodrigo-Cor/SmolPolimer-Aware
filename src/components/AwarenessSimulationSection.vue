<template>
  <div>
    <p>Id Padre: {{ id }}</p>
    <p>Número de pregunta asignada Padre: {{ numberQuestion }}</p>
    <AwarenessForm :questions="finalQuestions" :typeQuestion="'final'" />
    <p>Variable disabled: {{ typeQuestion === "start" ? isDisabled : false }}</p>
  </div>
</template>

<script>
import AwarenessForm from "@/components/AwarenessForm.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AwarenessSimulationSection",
  data() {
    return {
      typeQuestion: "final",
    };
  },
  components: {
    AwarenessForm,
  },
  computed: {
    ...mapGetters({
      id: "getUserId",
      numberQuestion: "getNumberQuestion",
      isDisabled: "getIsDisabled",
    }),
  },
  methods: {
    ...mapActions({
      modifyData: "modifyData",
    }),
  },
  data() {
    return {
      finalQuestions: [
        {
          question:
            "¿En qué medida ha aumentado su comprensión sobre los riesgos de contaminación por microplásticos?",
          options: [
            "Nada",
            "Ligeramente",
            "Moderadamente",
            "Mucho",
            "Extremadamente",
          ],
        },
        {
          question:
            "¿Cómo ha cambiado su sentido de responsabilidad respecto a abordar la contaminación por microplásticos en el agua?",
          options: [
            "Nada responsable",
            "Poco responsable",
            "Moderadamente responsable",
            "Muy responsable",
            "Absolutamente responsable",
          ],
        },
        {
          question:
            "¿En qué medida considera que la interacción con el simulador gráfico ha influido en su comprensión de las técnicas de limpieza de microplásticos?",
          options: [
            "Nada influyente",
            "Ligeramente influyente",
            "Algo influyente",
            "Muy influyente",
            "Extremadamente influyente",
          ],
        },
        {
          question:
            "¿Qué probabilidad considera que tienen la aplicación de influir en sus hábitos para reducir la contaminación por microplásticos?",
          options: [
            "No probable ",
            "Algo improbable",
            "Neutral",
            "Algo probable",
            "Muy probable",
          ],
        },
        {
          question:
            "¿Estaría dispuesto a compartir la información que aprendió con otros para aumentar la conciencia sobre la contaminación por microplásticos?",
          options: [
            "Totalmente en desacuerdo",
            "Moderadamente en desacuerdo",
            "Neutral",
            "Moderadamente a favor",
            "Totalmente a favor",
          ],
        },
        {
          question:
            "¿Siente interés en conocer más acerca de los riesgos de la contaminación por microplásticos en el agua?",
          options: ["Si", "No"],
        },
        {
          question:
            "¿Estaría dispuesto a cambiar sus hábitos para reducir el uso de plásticos?",
          options: ["Si", "No"],
        },
      ],
    };
  },
};
</script>
