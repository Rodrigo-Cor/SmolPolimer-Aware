<template>
  <div class="text-card">
  <div class="row">
      <template v-for="(reference, index) in references">
        <div class="col-md-4 col-12">
        <div class="card mx-1 my-2">
          <div class="card-body">
            <p class="card-title">Referencia {{ index + 1 }}</p>
            <p class="card-subtitle mb-2 text-body-secondary">
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
            </p>
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
              }}
              {{ reference.yearPublication }}. [En línea].
            </p>
            <p>
              Disponible en:
              <a :href="reference.link" target="_blank" class="card-link"
                >Ir al artículo</a
              >. [Accedido el {{ reference.dateAccess }}]
            </p>
          </div>
        </div>
      </div>
      </template>
  </div>
</div>
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
