<template>
  <main class="container-fluid color-home">
    <article class="row">
      <section class="col-md-8 col-12 fw-bolder mt-3 text-justify-custom">
        Por favor, responde la pregunta del inicio. Son para las mediciones de
        nuestro trabajo terminal
        <br>
        <button class="btn btn-info" @click="irASecionImportante" type="button">
          Regresar a la página de inicio
        </button>
      </section>
      <section class="col-md-4 col-12 d-flex justify-content-center mt-3">
        <img
          src="@/assets/meme-super.png"
          class="img-fluid h-75"
          alt="Meme Superheroes"
        />
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: "AnswerQuestionView",
  methods: {
    irASecionImportante() {
      this.$router.push("/");
      setTimeout(() => {
        const question = document.getElementById("section-question");

        if (question) {
          question.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 300);
    },
  },
};
</script>
