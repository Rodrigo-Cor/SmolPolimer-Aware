<template>
  <div class="container">
    <div class="row">
      <div class="col align-self-center">
        <img
          :src= img 
          class="img-fluid"
          alt="Imagen"
        />
      </div>
      <div class="col align-self-center">
        <p class="text-justify">
            {{txt}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
      name:'InfoSection',
      props:{
        txt: {
          type: String,
          required: true
        },
        img: {
          type: String,
          required: true
        }
      } 
    }
</script>