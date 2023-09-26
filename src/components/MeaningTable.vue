<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Concepto</th>
          <th scope="col">Definición</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in meanings" :key="key">
          <td scope="row">{{ value.value }}</td>
          <td>{{ value.meaning }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div
    class="accordion text-size"
    :id="'accordionMeanings'"
    v-for="(value, key, index) in meanings"
    :key="index"
  >
    <div class="accordion-item m-4">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + key"
          aria-expanded="false"
          :aria-controls="'collapse' + key"
        >
          Concepto {{ index + 1 }} : {{ value.value }}
        </button>
      </h2>
      <div
        :id="'collapse' + key"
        class="accordion-collapse collapse"
        :data-bs-parent="'#accordionMeanings'"
      >
        <div class="accordion-body">
          <p>{{ value.meaning }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeaningTable",
  props: {
    meanings: {
      type: Object,
      required: true,
    },
  },
};
</script>
