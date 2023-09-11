<template>

</template>
<script>
import Swal from "sweetalert2";
export default {
  props: {
	alertTitle: String,
    alertText: String,
    alertIcon: String,
	alertConfirmButton: String,
	alertToDenyButton: Boolean,
  },
  mounted() {
	this.showAlert();
  },
  data() {
	return {
	  choice : false,
	};
  },
  methods: {
    showAlert() {
      Swal.fire({
	    title: this.alertTitle || "Algo inesperado ocurrió",
	    text: this.alertText || "Haz clic en 'Confirmar'",
        background: "#1e1e1e",
        color: "#effffb",
	    icon: this.alertIcon || "warning",
		position: "center",

	    allowOutsideClick: false,
      	allowEscapeKey: false,
	    allowEnterKey: false,
	    stopKeydownPropagation: false,

	    showConfirmButton: true,
		confirmButtonText: this.alertConfirmButton || "Confirmar",
	    confirmButtonColor: "#50d890",
	    confirmButtonAriaLabel: "Confirmar",

		showDenyButton: this.alertToDenyButton || false,
		denyButtonText: "Por defecto",
		confirmButtonColor: "#4f98ca",
		confirmButtonAriaLabel: "Denegar",

      	showCancelButton: false,
	    cancelButtonText: "Cancelar",
	    cancelButtonAriaLabel: "Cancelar",
      }).then((result) => {
  		if (result.isConfirmed) {
    		this.choice = true;
  		}  else if (result.isDenied) {
    		this.choice = false
  		}
  		this.$emit("choice-made", this.choice);
		});
    },
  },
};
</script>