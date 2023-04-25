<template>
    <div class="container text-center">
        <div class="row justify-content-around">
            <div class="card col-4 m-2 p-0" v-for="card in cardsData" :key="card.id">
                <div class="card-body">
                    <h5 class="card-title">{{ card.title }}</h5>
                    <p class="card-text"> Autores: {{ card.author }} </p>
                    <a target="_blank" :href="card.link" class="btn btn-info">Ir al articulo</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require("axios");
export default {
    name: 'CardArticles',
    props: {
        buttonValue: String
    },
    data() {
        return {
            cardsData: [],
        }
    },
    methods: {
        async getData() {
            const data = {
                searchTerm: this.buttonValue,
                typeRequest: 0,
                articlesNum: 3
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const response = await axios.post("https://microplasticosapi.azurewebsites.net/api/GetIDArticles?code=TF6d-H1Lk5DlgNk-hn7sEthaqCD-rN4m6LR_w9Ca-Q3eAzFudmQ1kA==", data, config)
            this.cardsData = await response.data
            console.log(this.cardsData)

        },
        prueba() {
            this.cardsData = [{
                "id": 1,
                "title": this.buttonValue,
                "author": "prueba",
                "link": "prueba"
            }, {
                "id": 2,
                "title": this.buttonValue,
                "author": "prueba",
                "link": "prueba"
            }, {
                "id": 3,
                "title": this.buttonValue,
                "author": "prueba",
                "link": "prueba"
            }]
        }
    },
}
</script>

<style scoped> 
.card-body {
     /*background-color: #4F98CA;*/
     background-image: linear-gradient(to bottom, #4F98CA, #50D890);
 }

 .card {
     width: 18rem;
 }
</style>