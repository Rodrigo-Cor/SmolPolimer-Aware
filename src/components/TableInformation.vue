<template>
  <table class="table table-info table-striped-columns">
    <thead>
      <tr>
        <template v-for="header in headers" :key="header">
          <th scope="col">{{ header }}</th>
        </template>
      </tr>
    </thead>
    <tbody>
      <tr v-for="({type, description, links, imgData, credits }, key) in information" :key="key">
        <th class="text-start" scope="row">{{ type }}</th>
        <td>
          <div class="row">
            <div
              v-bind:class="{
                'col-md-8 col-12': img,
              }"
            >
            {{ description }}    
            <template v-for="({ text, id }, index) in links" :key="index">       
              <button
                    @click="() => goReferences(id)"
                    type="button"
                    class="btn btn-link btn-sm p-0 m-0"
                  >
                    {{ text }}
                  </button>
                </template>
            </div>
            <div
              v-bind:class="{
                'col-md-4 col-12': img,
              }"
              v-if="img"
            >
              <ReferencesAuthors
                :img="imgData"
                :credits="credits"
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
import { mapMutations } from "vuex";
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
  methods: {
    ...mapMutations({
      setShowReferences: "setShowReferences",
    }),
    goReferences(id) {
      this.setShowReferences(true);
      setTimeout(() => {
        const reference = document.getElementById(id);
        if (reference) {
          reference.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 200);
    },
  },
};
</script>