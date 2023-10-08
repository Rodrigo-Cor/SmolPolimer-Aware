<template>
  <template v-for="(info, index) in infoComponent" :key="index">
    <div v-if="currentPage === index + 1">
      <InfoSection :is="info" :...="info" />
    </div>
  </template>

  <nav aria-label="pageNavigationInformation">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link color-page" aria-label="Previous" @click="previousPage">
          <span aria-hidden="true"><i class="bi bi-caret-left"></i></span>
        </a>
      </li>
      <li
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        v-bind:class="{
          'page-item': currentPage !== pageNumber,
        }"
      >
        <a
          class="page-link"
          @click="changePage(pageNumber)"
          v-bind:style="{
            backgroundColor: currentPage === pageNumber ? '#0F2C59' : 'white',
            color: currentPage === pageNumber ? '#ECEE81' : 'blue',
          }"
          >{{ pageNumber }}</a
        >
      </li>
      <li class="page-item">
        <a class="page-link color-page" aria-label="Next" @click="nextPage">
          <span aria-hidden="true"><i class="bi bi-caret-right"></i></span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.pages-info {
  background-color: #bfd4ff7f;
}

 .color-page {
  color: blue; 
}

.color-page:hover {
  background-color: #F8F0E5; 
}
</style>

<script>
//Bacterias
import ReferencesAuthors from "./ReferencesAuthors.vue";
import InfoSection from "./InfoSection.vue";
export default {
  name: "InformationPages",
  components: {
    ReferencesAuthors,
    InfoSection,
  },
  data() {
    return {
      currentPage: 1,
      totalPages: this.infoComponent.length,
      totalCards: 3,
    };
  },
  props: {
    infoComponent: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>
