<template>
  <div class="container-fluid">
    <div class="row">
      <div
        v-for="(paragraph, index) in informationCollapse"
        class="col-6 col-md-3 mt-2"
      >
        <button
          class="btn btn-primary mb-2"
          data-bs-toggle="collapse"
          :href="'#collapse' + typeCollapse + (index + 1)"
          aria-expanded="false"
          :aria-controls="'collapse' + typeCollapse + (index + 1)"
        >
          {{ paragraph.title }}
        </button>
        <div
          class="collapse multi-collapse my-2"
          :id="'collapse' + typeCollapse + (index + 1)"
        >
          <div class="card card-body">
            {{ paragraph.information }}
            {{ paragraph.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Caracteristicas de los microplasticos

export default {
  name: "CollapseInformation",
  props: {
    informationCollapse: {
      type: Array,
      required: true,
    },
    typeCollapse: {
      type: String,
      required: true,
    },
  },
};
</script>
