<template>
  <div>
    <AwarenessForm :questions="startQuestions" :typeQuestion="'start'" />
    
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
    }),
  },
  methods: {
    ...mapActions({
      modifyData: "modifyData",
    }),
  },
  data() {
    return {
      startQuestions: [
        {
          question:
            "¿Cuál es su nivel de familiaridad sobre el término “microplásticos?",
          options: [
            { option: "Nada familiar", value: 0 },
            { option: "Un poco familiar", value: 1 },
            { option: "Algo familiar", value: 2 },
            { option: "Moderadamente familiar", value: 3 },
            { option: "Extremadamente familiar", value: 4 },
          ],
          recomendation: "Ayuda 0",
        },
        {
          question:
            "¿Qué nivel de conocimiento posee sobre cómo los microplásticos pueden ingresar a ecosistemas acuáticos?",
          options: [
            { option: "Muy pobre", value: 0 },
            { option: "Por debajo del promedio", value: 1 },
            { option: "Promedio", value: 2 },
            { option: "Por encima del promedio", value: 3 },
            { option: "Excelente", value: 4 },
          ],
          recomendation: "Ayuda 1",
        },
        {
          question:
            "¿Cómo evalúa la gravedad de los efectos de los microplásticos en la vida acuática?",
          options: [
            { option: "Sin efectos", value: 0 },
            { option: "Efectos menores", value: 1 },
            { option: "Neutral", value: 2 },
            { option: "Efectos moderados", value: 3 },
            { option: "Grandes efectos", value: 4 },
          ],
          recomendation: "Ayuda 2",
        },
        {
          question:
            "¿Considera importante abordar la contaminación por microplásticos en el agua?",
          options: [
            { option: "Nada importante", value: 0 },
            { option: "Un poco importante", value: 1 },
            { option: "Moderadamente importante", value: 2 },
            { option: "Importante", value: 3 },
            { option: "Muy importante", value: 4 },
          ],
          recomendation: "Ayuda 3",
        },
        {
          question:
            "¿Cuál es su nivel de conciencia sobre la contaminación por microplásticos en el agua?",
          options: [
            { option: "No del todo consciente", value: 0 },
            { option: "Ligeramente consciente", value: 1 },
            { option: "Algo consciente", value: 2 },
            { option: "Moderadamente consciente", value: 3 },
            { option: "Extremadamente consciente", value: 4 },
          ],
          recomendation: "Ayuda 4",
        },
        {
          question:
            "¿Conoce los efectos nocivos de los microplásticos en los seres vivos?",
          options: [
            { option: "No", value: 0 },
            { option: "Si", value: 1 },
          ],
          recomendation: "Ayuda 5",
        },
        {
          question:
            "¿Está consciente de que a través del consumo de pescados y mariscos es posible que los microplásticos ingresen a la cadena alimentaria humana?",
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
