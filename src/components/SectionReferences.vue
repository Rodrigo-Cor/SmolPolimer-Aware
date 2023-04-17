<template>
    <div>
        <div class="container">
            <div class="row justify-content-around">
                <button type="button col-2" class="btn btn-outline-info" @click="navigate('water care')">Cuidado del
                    agua</button>
                <button type="button col-2" class="btn btn-outline-info"
                    @click="navigate('microplastics water')">Microplásticos en el agua</button>
                <button type="button col-2" class="btn btn-outline-info" @click="navigate('psychology')">Psicologia</button>
            </div>
        </div>
    </div>
    <CardArticles :buttonValue="buttonValue" ref="childComponent"/>
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
            this.$refs.childComponent.getData();
        }
    },
}
</script>