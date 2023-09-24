<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4">
        <div
          id="list-example"
          class="list-group"
          v-for="(paragraph, index) in informationScrollspy"
        >
          <a
            class="list-group-item list-group-item-action"
            :href="'#list-item-' + (index + 1)"
          >
            {{ paragraph.title }}</a
          >
        </div>
      </div>
      <div class="col-8">
        <div
          data-bs-spy="scroll"
          data-bs-target="#list-example"
          data-bs-smooth-scroll="true"
          class="scrollspy-example"
          tabindex="0"
          data-bs-offset="0"
        >
          <template v-for="(paragraph, index) in informationScrollspy">
            <h4 :id="'list-item-' + (index + 1)">{{ paragraph.title }}</h4>
            <p>
              {{ paragraph.information }}
            </p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Tecnica de filtracion fisicas
export default {
  name: "ScrollspyInformation",
  props: {
    informationScrollspy: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.scrollspy-example {
  height: 200px;
  margin-top: 0.5rem;
  overflow: auto;
}
</style>
