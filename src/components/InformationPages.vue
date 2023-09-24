<template>
  <div class="container-fluid mt-4">
    <template v-for="(informationPage, index) in informationPages" :key="index">
      <div v-if="currentPage === index + 1">
        <p>{{ informationPage }}</p>
      </div>
    </template>

    <nav aria-label="pageNavigationInformation">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" aria-label="Previous" @click="previousPage">
            <span aria-hidden="true"><i class="bi bi-caret-left"></i></span>
          </a>
        </li>
        <li
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          v-bind:class="{
            'page-item': currentPage !== pageNumber,
            'page-item active': currentPage === pageNumber,
          }"
        >
          <a class="page-link" @click="changePage(pageNumber)">{{
            pageNumber
          }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" aria-label="Next" @click="nextPage">
            <span aria-hidden="true"><i class="bi bi-caret-right"></i></span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
//Bacterias

export default {
  name: "InformationPages",
  data() {
    return {
      currentPage: 1,
      totalPages: this.informationPages.length,
    };
  },
  props: {
    informationPages: {
      type: Array,
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
