<template>
  <template v-for="(reference, index) in references">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Referencia {{ index + 1 }}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">
          {{
            reference.authors.length === 1
              ? "Autor: " + reference.authors[0]
              : "Autores: " + reference.authors.join(", ")
          }}
        </h6>
        <p class="card-text text-justify-custom">
          {{ reference.title }}
          {{ reference.vol !== "" ? ", vol. " + reference.vol : "" }}, pp. {{
            reference.pages
          }}, {{ reference.yearPublication }}. [En línea].
        </p>
        <p>
            Disponible en: <a :href="reference.link" target="_blank" class="card-link">Ir al artículo</a>. [Accedido el {{ reference.dateAccess }}]
        </p>
      </div>
    </div>
  </template>
</template>

<script>
export default {
  name: "InfoReferences",
  props: {
    references: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.text-justify-custom {
    text-align: justify;
  }
</style>