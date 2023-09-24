<template>
  <div class="container-fluid mt-2">
    <div class="border border-dark mb-2 p-2">
      <div class="fw-bold">
        <span>{{ comment.user }}</span>
      </div>
      <p>{{ comment.text }}</p>
      <button class="btn btn-success mb-1" @click="toggleReplyForm">
        Responder
      </button>
      <div v-show="showReplyForm">
        <div class="form-floating">
          <textarea
            v-model="newReplyText"
            class="form-control"
            style="height: 75px"
          ></textarea>
        </div>
        <button class="btn btn-primary" @click="addReply">Enviar</button>
      </div>
      <CommentUser
        v-for="(reply, index) in comment.replies"
        :key="index"
        :comment="reply"
      ></CommentUser>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentUser",
  methods: {
    toggleReplyForm() {
      this.showReplyForm = !this.showReplyForm;
    },
    addReply() {
      if (this.newReplyText.trim() === "") return;
      console.log(this.comment);
      this.comment.replies.push({
        id: this.comment.replies.length + 1,
        user: "Usuario Nuevo",
        text: `Respuesta a ${this.comment.user}: ${this.newReplyText}`,
      });
      this.newReplyText = "";
      this.showReplyForm = false;
    },
    actualizarValor() {
      const nuevoValor = Math.random().toFixed(2);
      this.valorActual = nuevoValor;
    },
  },
  data() {
    return {
      showReplyForm: false,
      newReplyText: "",
      valorActual: 0,
    };
  },
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>
