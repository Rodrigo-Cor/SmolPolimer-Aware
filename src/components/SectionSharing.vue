<template>
  <article class="section-sharing text-justify-custom">
    <article
      class="d-flex justify-content-md-start justify-content-center mb-3"
    >
      <article>
        <button class="btn btn-outline-light btn-lg rounded-pill rounded-2" @click="share">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-share"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
            />
          </svg>
          Compartir
        </button>
      </article>
    </article>
    <InfoSection
      :img="{
        src: require('@/assets/jas-min-HfgMyrPrLxI-unsplash.jpg'),
        alt: 'Contaminación en la playa',
      }"
      :credits="{
        'Foto de ': '',
        'Jas Min ':
          'https://unsplash.com/es/@filmbetrachterin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        ' en ': '',
        Unplash:
          'https://unsplash.com/es/fotos/lote-de-articulos-de-varios-colores-HfgMyrPrLxI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
      }"
      :sideImage="true"
      :arrayText="[
        [
          {
            value:
              '¡Únete a nosotros para marcar la diferencia! Tu apoyo es fundamental para crear conciencia sobre la contaminación de microplásticos en el agua. Compartir nuestra página es una forma sencilla pero poderosa de contribuir a un mundo más limpio y saludable. ¡Ayúdanos a difundir la palabra! 🌊💙',
            key: '',
          },
        ],
        [
          {
            value:
              'Juntos, podemos educar, concienciar y movilizar a más personas para tomar medidas concretas y proteger nuestro planeta. Compartir es el primer paso para unirnos en esta lucha y marcar la diferencia. ¡Te invitamos a ser un agente del cambio y a compartir nuestra página hoy mismo!',
            key: '',
          },
        ],
      ]"
    />
  </article>
</template>

<script>
import Swal from "sweetalert2";
import InfoSection from "./InfoSection.vue";
export default {
  name: "SectionSharing",
  components: {
    InfoSection,
  },
  methods: {
    share() {
      Swal.fire({
        title: "Compartir la aplicación",
        background: "#effffb",
        showCancelButton: true,
        showConfirmButton: true,
        showCloseButton: true,
        showDenyButton: true,
        showLoaderOnConfirm: true,

        cancelButtonText:
          "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' class='bi bi-clipboard' viewBox='0 0 16 16'><path d='M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z'/><path d='M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z'/></svg><br> Copiar enlace",
        cancelButtonColor: "#17a2b8BD",

        denyButtonText:
          "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' class='bi bi-whatsapp' viewBox='0 0 16 16'><path d='M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z'/></svg><br> WhatsApp",
        denyButtonColor: "#25D366",

        confirmButtonText:
          "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' class='bi bi-twitter-x' viewBox='0 0 16 16'><path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z'/></svg><br> X",
        confirmButtonColor: "#272727",
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isDenied) {
          const mensajeWhatsApp = encodeURIComponent(
            "¡Visita esta página genial! https://smol-polimer-aware.vercel.app/"
          );
          const enlaceWhatsApp = `https://api.whatsapp.com/send?text=${mensajeWhatsApp}`;
          window.open(enlaceWhatsApp, "_blank");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          const url = "https://smol-polimer-aware.vercel.app/";
          navigator.clipboard.writeText(url);
          Swal.fire({
            position: "bottom-end",
            text: "Enlace copiado al portapapeles",
            timer: 1000,
            showConfirmButton: false,
          });
        } else if (result.dismiss === Swal.DismissReason.confirm) {
          const mensajeTwitter = encodeURIComponent(
            "¡Visita esta página genial! https://smol-polimer-aware.vercel.app/"
          );
          const enlaceTwitter = `https://twitter.com/intent/tweet?text=${mensajeTwitter}`;
          window.open(enlaceTwitter, "_blank");
        }
      });
    },
  },
};
</script>
