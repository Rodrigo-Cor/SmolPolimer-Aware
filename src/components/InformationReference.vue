<template>
  <div class="text-card">
    <div class="row">
      <template
        v-for="(
          {
            authors,
            title,
            editorial,
            vol,
            no,
            pages,
            yearPublication,
            link,
            dateAccess,
          },
          index
        ) in references"
      >
        <div class="col-md-4 col-12">
          <div class="card mx-1 my-2">
            <div class="card-body" :id="view + index">
              <p class="card-title">Referencia {{ index + 1 }}</p>
              <p class="card-subtitle mb-2 text-body-secondary">
                <template v-if="authors[1] === 'et al.'"
                  >Autores: {{ authors[0] }}
                  <span class="fst-italic">et al.</span></template
                >
                <template v-else>
                  {{
                    authors.length === 1
                      ? "Autor: " + authors[0]
                      : "Autores: " + authors.join(", ")
                  }}
                </template>
              </p>
              <p class="card-text text-justify-custom">
                {{ title }}.
                <span class="fst-italic">{{ editorial }}</span>
                {{ vol !== "" ? ", vol. " + vol : "" }}
                {{ no !== "" ? ", no. " + no : "" }}
                {{
                  pages.length === 0
                    ? ""
                    : pages.length === 1
                    ? ", p. " + pages[0] + ", "
                    : ", pp. " + pages.join("- ") + ", "
                }}
                {{ yearPublication }}. [En línea].
              </p>
              <p>
                Disponible en:
                <a :href="link" target="_blank" class="card-link"
                  >Ir al artículo</a
                >. [Accedido el {{ dateAccess }}]
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
      required: true,
    },
    view: {
      type: String,
    },
  },
};
</script>
