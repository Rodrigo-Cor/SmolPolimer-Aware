<template>
    <div class="card-deck d-flex justify-content-around">
        <div class="card" v-for="card in cardsData" :key="card.id">
            <div class="card-body">
                <h5 class="card-title">{{ card.title }}</h5>
                <p class="card-text"> Autores: {{ card.author }} </p>
                <a :href="card.link" class="btn btn-info">Ir al articulo</a>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require("axios");
export default {
    name: 'CardArticles',
    mounted() {
        this.getData();
    },
    data() {
        return {
            cardsData: []
        }
    },
    methods: {
        async getData() {
            const response = await axios.get("https://microplasticosapi.azurewebsites.net/api/GetDataArticles?code=1TE7ztLQ9Hp0ULDMzb8f5QvwdKhv5sR1QRyCCGynuwgAAzFuHN01ig==")
            this.cardsData = await response.data
            //console.log(this.cardsData)
        }
    },
}
</script>

<style scoped> 
.card {
    width: 20rem;
}

.card-body{
    background-image: linear-gradient(to bottom, #4F98CA, #50D890);
}
</style>