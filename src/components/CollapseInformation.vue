<template>
  <div class="container-fluid text-justify-custom mt-2">
    <div class="d-flex justify-content-between">
      <div v-for="(paragraph, index) in informationCollapse" :key="index">
        <button
          class="btn btn-info btn-sm mb-2"
          @click="toggleCollapse(index)"
          @blur="toggleCollapse(index)"
          :class="{
            'active btn btn-warning': arrayCollapse[index].isOpen,
          }"
        >
          {{ paragraph.title }}
        </button>
      </div>
    </div>
    <div class="row">
      <div
        class="col-12 col-md-3 mt-2"
        v-for="(paragraph, index) in informationCollapse"
        :key="index"
      >
        <div
          :class="{ collapse: true, show: arrayCollapse[index].isOpen }"
          :id="'collapse' + typeCollapse + (index + 1)"
        >
          <div class="card card-body">
            {{ paragraph.information }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  data() {
    return {
      arrayCollapse: this.informationCollapse,
    };
  },
  methods: {
    toggleCollapse(index) {
      this.arrayCollapse = this.informationCollapse.map((paragraph, i) => {
        paragraph.isOpen = i === index ? !paragraph.isOpen : false;
        return paragraph;
      });
    },
  },
};
</script>
