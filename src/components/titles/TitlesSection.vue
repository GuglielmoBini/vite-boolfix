<script>
import { store } from '../../data/store';
import titlesCard from './TitlesCard.vue';
export default {
    name: 'titlesSection',
    data() {
        return { store }
    },
    props: {
        title: String,
        collection: String
    },
    components: { titlesCard }
}
</script>

<template>
    <section :id="collection">
        <h2 class="m-5">{{ title }}</h2>
        <div class="d-flex flex-wrap justify-content-center">
            <titles-card v-for="prod in store[collection]" :key="prod.id" :item="prod"></titles-card>
        </div>
    </section>
</template>

<style lang="scss" scoped>
h2 {
    text-shadow: 0 0 5px black;
}
</style>