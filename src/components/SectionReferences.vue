<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="justify-content-around">
                        <button
                            v-bind:class="{ 'btn': true, 'btn-outline-info': !buttonStates['water care'], 'btn btn-info': buttonStates['water care'] }"
                            type="button" @click="navigate('water care')">Cuidado del
                            agua</button>
                        <button
                            v-bind:class="{ 'btn': true, 'btn-outline-info': !buttonStates['microplastics water'], 'btn btn-info': buttonStates['microplastics water'] }"
                            type="button" @click="navigate('microplastics water')">Microplásticos en el agua</button>
                        <button
                            v-bind:class="{ 'btn': true, 'btn-outline-info': !buttonStates['psychology'], 'btn btn-info': buttonStates['psychology'] }"
                            type="button" @click="navigate('psychology')">Psicologia</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <CardArticles :button-value="buttonValue" ref="childComponent" />
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
            buttonValue: '',
            buttonStates: {
                'water care': false,
                'microplastics water': false,
                'psychology': false
            }
        }
    },
    methods: {
        navigate(buttonValue) {
            this.buttonValue = buttonValue;
            for (let key in this.buttonStates) {
                if (key === buttonValue)
                    this.buttonStates[key] = true;
                else
                    this.buttonStates[key] = false;
            }
            this.$nextTick(() => {
                this.$refs.childComponent.prueba();
                //this.$refs.childComponent.getData(buttonValue);
            });     
        }
    },
}
</script>

<style scoped>
.btn {
    margin: 1em;
}
</style>