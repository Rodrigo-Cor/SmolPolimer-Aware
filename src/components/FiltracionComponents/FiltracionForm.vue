<template>
  <div class="container-fluid">
    <h2
      class="section-subtitle text-center animate__animated animate__flash"
      id="form-section"
    >
      Formulario
    </h2>
    <form class="row g-3" @submit="handleSubmit">
      <div class="col-md-4 col-12 text-center">
        <Popper
          class="popper-box"
          arrow
          content="Cantidad de microplasticos a filtrar"
          placement="top"
          hover
        >
          <button type="button" class="btn btn-bd-info btn-sm mb-2">
            <i class="bi bi-lightbulb"></i>
          </button>
        </Popper>
        <div class="input-group mb-3">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              v-model="microplastics.value"
              id="microplasticInput"
              name="microplasticInput"
              placeholder="Microplásticos"
              aria-label="Microplásticos"
              aria-describedby="basic-addon1"
            />
            <label for="microplasticInput">Microplásticos</label>
          </div>
          <span class="input-group-text" id="basic-addon1">mg</span>
        </div>
        <span class="myAlert" v-if="!microplastics.validate"
          ><i class="bi bi-exclamation-diamond-fill"></i> Mínimo 1, máximo
          40</span
        >
      </div>
      <div class="col-md-4 col-12 text-center">
        <Popper
          class="popper-box"
          arrow
          content="Cantidad de residuos microplásticos"
          placement="top"
          hover
        >
          <button type="button" class="btn btn-bd-info btn-sm mb-2">
            <i class="bi bi-lightbulb"></i>
          </button>
        </Popper>
        <div class="input-group mb-3">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              v-model="residues.value"
              id="residueInput"
              name="residueInput"
              placeholder="Residuos"
              aria-label="Residuos"
              aria-describedby="basic-addon2"
            />
            <label for="residueInput">Residuos</label>
          </div>
          <span class="input-group-text" id="basic-addon2">mg</span>
        </div>
        <span class="myAlert" v-if="!residues.validate"
          ><i class="bi bi-exclamation-diamond-fill"></i> Mínimo 1, máximo
          20</span
        >
      </div>
      <div class="col-md-4 col-12 text-center">
        <Popper
          class="popper-box"
          arrow
          content="Cuántos días van a pasar por el filtro"
          placement="top"
          hover
        >
          <button type="button" class="btn btn-bd-info btn-sm mb-2">
            <i class="bi bi-lightbulb"></i>
          </button>
        </Popper>
        <div class="input-group mb-3">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              v-model="treatments.value"
              id="treatmentInput"
              name="treatmentInput"
              placeholder="Tiempo"
              aria-label="Tiempo"
              aria-describedby="basic-addon3"
            />
            <label for="treatmentInput">Tiempo</label>
          </div>
          <span class="input-group-text" id="basic-addon3">días</span>
        </div>
        <span class="myAlert" v-if="!treatments.validate"
          ><i class="bi bi-exclamation-diamond-fill"></i> Mínimo 2, máximo
          24</span
        >
      </div>
      <div class="d-flex justify-content-center my-4">
        <button
          type="submit"
          class="btn btn-bd-primary"
          :disabled="
            !microplastics.validate ||
            !residues.validate ||
            !treatments.validate
          "
        >
          <i class="bi bi-check-circle"></i> Calcular
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Popper from "vue3-popper";
export default {
  name: "FiltracionForm",
  components: {
    Popper,
  },
  data() {
    return {
      microplastics: {
        value: 29,
        validate: true,
      },
      residues: {
        value: 5,
        validate: true,
      },
      treatments: {
        value: 9,
        validate: true,
      },
    };
  },
  watch: {
    "microplastics.value"(val) {
      this.microplastics.validate = val >= 1 && val <= 40;
    },
    "residues.value"(val) {
      this.residues.validate = val >= 1 && val <= 20;
    },
    "treatments.value"(val) {
      this.treatments.validate = val >= 2 && val <= 24;
    },
  },
  methods: {
    ...mapMutations({
      setMicroplastics: "setMicroplastics",
      setResidues: "setResidues",
      setTimeUnits: "setTimeUnits",
    }),
    handleSubmit(event) {
      event.preventDefault();
      this.setMicroplastics(this.microplastics.value);
      this.setResidues(this.residues.value);
      this.setTimeUnits(this.treatments.value);
      setTimeout(() => {
        this.scrollVisualizationResults();
      }, 340);
    },
    scrollVisualizationResults() {
      const resultsSection = document.getElementById("results-section");
      if (resultsSection) {
        resultsSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style scoped>
.myAlert {
  color: #f41b35;
  font-size: 1rem;
  font-weight: bold;
}
.form-control:focus {
  box-shadow: none;
}
.input-group-text {
  background-color: #50d890;
}
.btn-bd-info {
  --bs-btn-border-radius: 2rem;
  --bs-btn-color: #50d890;
  --bs-btn-bg: #272727;
  --bs-btn-border-color: #272727;
  --bs-btn-hover-color: #272727;
  --bs-btn-hover-bg: #50d890;
  --bs-btn-hover-border-color: #50d890;
  --bs-btn-active-color: #272727;
  --bs-btn-active-bg: #50d890;
  --bs-btn-active-border-color: #50d890;
}

.btn-bd-primary {
  --bs-btn-border-radius: 2rem;
  --bs-btn-font-weight: bold;
  --bs-btn-color: #effffb;
  --bs-btn-bg: #4f98ca;
  --bs-btn-border-color: #4f98ca;
  --bs-btn-hover-color: #effffb;
  --bs-btn-hover-bg: #50d890;
  --bs-btn-hover-border-color: #50d890;
  --bs-btn-active-color: #effffb;
  --bs-btn-active-bg: #50d890;
  --bs-btn-active-border-color: #50d890;
}

.popper-box {
  --popper-theme-background-color: #272727;
  --popper-theme-background-color-hover: #272727;
  --popper-theme-text-color: #effffb;
  --popper-theme-border-width: 0rem;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 1rem;
  --popper-theme-padding: 0.8rem;
  --popper-theme-box-shadow: 0 0.375rem 1.875rem -0.375rem rgba(39, 39, 39, 0.25);
}
</style>
