<template>
  <div>
    <p>Id Padre: {{ id }}</p>
    <p>Número de pregunta asignada Padre: {{ numberQuestion }}</p>
    <AwarenessForm :questions="startQuestions" :typeQuestion="'start'" />
    <p>
      Variable disabled: {{ typeQuestion === "start" ? isDisabled : false }}
    </p>
  </div>
</template>

<script>
import AwarenessForm from "@/components/AwarenessForm.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AwarenessHomeSection",
  mounted() {
    if (this.id === "") {
      this.modifyData(Math.floor(Math.random() * this.startQuestions.length));
    }
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
      typeQuestion: "start",
      startQuestions: [
        {
          question:
            "¿Cuál es su nivel de familiaridad sobre el término “microplásticos?",
          options: [
            "Nada familiar",
            "Un poco familiar",
            "Algo familiar",
            "Moderadamente familiar",
            "Extremadamente familiar",
          ],
        },
        {
          question:
            "¿Qué nivel de conocimiento posee sobre cómo los microplásticos pueden ingresar a ecosistemas acuáticos?",
          options: [
            "Muy pobre",
            "Por debajo del promedio",
            "Promedio",
            "Por encima del promedio",
            "Excelente",
          ],
        },
        {
          question:
            "¿Cómo evalúa la gravedad de los efectos de los microplásticos en la vida acuática?",
          options: [
            "Sin efectos",
            "Efectos menores",
            "Neutral",
            "Efectos moderados",
            "Grandes efectos",
          ],
        },
        {
          question:
            "¿Considera importante abordar la contaminación por microplásticos en el agua?",
          options: [
            "Nada importante",
            "Un poco importante",
            "Moderadamente importante",
            "Importante",
            "Muy importante",
          ],
        },
        {
          question:
            "¿Cuál es su nivel de conciencia sobre la contaminación por microplásticos en el agua?",
          options: [
            "No del todo consciente",
            "Ligeramente consciente",
            "Algo consciente",
            "Moderadamente consciente",
            "Extremadamente consciente",
          ],
        },
        {
          question:
            "¿Conoce los efectos nocivos de los microplásticos en los seres vivos?",
          options: ["Si", "No"],
        },
        {
          question:
            "¿Está consciente de que a través del consumo de pescados y mariscos es posible que los microplásticos ingresen a la cadena alimentaria humana?",
          options: ["Si", "No"],
        },
      ],
    };
  },
};
</script>
