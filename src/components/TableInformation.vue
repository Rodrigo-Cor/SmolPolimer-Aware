<template>
  <table class="table">
    <thead>
      <tr>
        <template v-for="header in headers" :key="header">
          <th scope="col">{{ header }}</th>
        </template>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, key) in information" :key="key">
        <th scope="row">{{ value.type }}</th>
        <td>
          <div class="row">
            <div
              v-bind:class="{
                'col-md-6 col-12': img,
              }"
            >
              {{ value.description }}
            </div>
            <div
              v-bind:class="{
                'col-md-6 col-12': img,
              }"
              v-if="img"
            >
              <ReferencesAuthors
                :img="value.imgData"
                :credits="value.credits"
              />
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ReferencesAuthors from "./ReferencesAuthors.vue";

export default {
  name: "TableInformation",
  props: {
    information: {
      type: Object,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    img: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ReferencesAuthors,
  },
};
</script>
