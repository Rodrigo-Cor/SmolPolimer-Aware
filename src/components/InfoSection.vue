<template>
  <div class="container">
    <div class="row">
      <div class="col align-self-center">
        <img
          :src= img 
          class="img-fluid"
          alt="..."
        />
      </div>
      <div class="col align-self-center">
        <h4>
            {{txt}}
        </h4>
      </div>
    </div>
    <div class="row"></div>
  </div>
</template>
<script>
    export default{
        name:'InfoSection',
        props:{
            txt: 'String',
            img: 'String'
        }
    }
</script>