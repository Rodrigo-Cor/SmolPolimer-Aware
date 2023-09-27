<template>
  <div class="container-fluid mt-4">
    <template v-for="(informationPage, index) in informationPages" :key="index">
      <div v-if="currentPage === index + 1" class="my-2">
        <InfoSection
          :img="
            require('@/assets/naja-bertolt-jensen-FxnqdmKBJps-unsplash.jpg')
          "
          :sideImage="true"
          :credits="[
            { 'Foto de ': '' },
            {
              'Naja Bertolt Jensen ':
                'https://unsplash.com/es/@naja_bertolt_jensen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
            },
            { 'en ': '' },
            {
              Unsplash:
                'https://unsplash.com/es/fotos/FxnqdmKBJps?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
            },
          ]"
          :arrayText="[informationPage.paragraph]"
        />
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
import InformationPages from "./InformationPages.vue";
import ReferencesAuthors from "./ReferencesAuthors.vue";
import InfoSection from "./InfoSection.vue";
export default {
  name: "InformationPages",
  components: {
    InformationPages,
    ReferencesAuthors,
    InfoSection,
  },
  data() {
    return {
      currentPage: 1,
      totalPages: this.informationPages.length,
      totalCards: 3,
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
