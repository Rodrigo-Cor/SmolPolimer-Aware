<template>
  <div>
    <h1>Comentarios</h1>
    <CommentUser
      v-for="(comment, index) in comments"
      :key="index"
      :comment="comment"
    ></CommentUser>
  </div>
</template>

<script>
import CommentUser from "./CommentUser.vue";

export default {
  name: "ForumText",
  components: {
    CommentUser,
  },
  data() {
    return {
      comments: [
        {
          id: 1,
          user: "Usuario 1",
          text: "Este es un comentario de nivel superior.",
          replies: [
            {
              id: 2,
              user: "Usuario 2",
              text: "Respuesta a Usuario 1: ¡Gracias por tu comentario!",
              replies: [
                {
                  id: 4,
                  user: "Usuario 4",
                  text: "Respuesta a Usuario 2: ¡Gracias por tu comentario!",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          user: "Usuario 3",
          text: "Respuesta a Usuario 2: Estoy de acuerdo contigo.",
          replies: [],
        },
      ],
    };
  },
};
</script>
