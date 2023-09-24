<template>
  <template v-for="(reference, index) in references">
    <div class="card m-3 text-size">
      <div class="card-body">
        <h5 class="card-title">Referencia {{ index + 1 }}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">
          <template v-if="reference.authors[1] === 'et al.'"
            >Autores: {{ reference.authors[0] }}
            <span class="fst-italic">et al.</span></template
          >
          <template v-else>
            {{
              reference.authors.length === 1
                ? "Autor: " + reference.authors[0]
                : "Autores: " + reference.authors.join(", ")
            }}
          </template>
        </h6>
        <p class="card-text text-justify-custom">
          {{ reference.title }}.
          <span class="fst-italic">{{ reference.editorial }}</span>
          {{ reference.vol !== "" ? ", vol. " + reference.vol : "" }}
          {{ reference.no !== "" ? ", no. " + reference.no : "" }}
          {{
            reference.pages.length === 0
              ? ""
              : reference.pages.length === 1
              ? ", p. " + reference.pages[0] + ", "
              : ", pp. " + reference.pages.join("- ") + ", "
          }} {{ reference.yearPublication }}. [En línea].
        </p>
        <p>
          Disponible en:
          <a :href="reference.link" target="_blank" class="card-link"
            >Ir al artículo</a
          >. [Accedido el {{ reference.dateAccess }}]
        </p>
      </div>
    </div>
  </template>
</template>

<script>
export default {
  name: "InformationReference",
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
