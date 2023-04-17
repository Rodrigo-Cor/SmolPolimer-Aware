<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="justify-content-around">
                        <button v-bind:class="{ 'btn': true, 'btn-outline-info': true }" type="button" @click="navigate('water care')">Cuidado del
                            agua</button>
                        <button type="button" v-bind:class="{ 'btn': true, 'btn-outline-info': true }"
                            @click="navigate('microplastics water')">Microplásticos en el agua</button>
                        <button type="button" v-bind:class="{ 'btn': true, 'btn-outline-info': true }"
                            @click="navigate('psychology')">Psicologia</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <CardArticles :buttonValue="buttonValue" ref="childComponent" />
</template>

<script>
import CardArticles from './CardArticles.vue';
export default {
    name: 'SectionReferences',
    components: {
        CardArticles
    },
    data() {
        return {
            buttonValue: ""
        }
    },
    methods: {
        navigate(buttonValue) {
            this.buttonValue = buttonValue
            this.buttonClass = 'btn btn-info'
            //this.$refs.childComponent.getData();
            this.$refs.childComponent.prueba();

        }
    },
}
</script>

<style scoped>
.btn.btn-outline-info{
    margin: 1em;
}

</style>