<template>
  <div class="container-fluid my-2">
    <div class="d-flex justify-content-center">
      <div class="btn-group" role="group" aria-label="groupButtonCollapse">
        <div v-for="(paragraph, index) in informationCollapse" :key="index">
          <button
            type="button"
            class="btn btn-light btn-outline-dark btn-sm m-1"
            @click="toggleCollapse(index)"
            @blur="closeCollapse(index)"
            :class="{
              active: arrayCollapse[index].isOpen,
            }"
          >
            {{ paragraph.title }}
          </button>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div
        class="my-2"
        v-for="(paragraph, index) in informationCollapse"
        :key="index"
      >
        <div :class="{ collapse: true, show: arrayCollapse[index].isOpen }">
          <div
            class="card card-body"
            v-bind:style="{
              backgroundColor: colorButton[0] + '7F',
            }"
          >
            {{ paragraph.information }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { generateColor } from "@/globalFunctions";
export default {
  name: "CollapseInformation",
  props: {
    informationCollapse: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      arrayCollapse: this.informationCollapse,
      colorButton: [],
    };
  },
  methods: {
    toggleCollapse(index) {
      this.arrayCollapse = this.informationCollapse.map((paragraph, i) => {
        paragraph.isOpen = i === index ? !paragraph.isOpen : false;
        return paragraph;
      });
    },
    closeCollapse(index) {
      this.arrayCollapse[index].isOpen = false;
    },
    showColor(color, luminisity, count) {
      return generateColor(color, luminisity, count);
    },
  },
  mounted() {
    this.colorButton = [...this.showColor("blue", "light", 1)];
  },
};
</script>
