<script>
import { store } from '../data/store';
import titlesCard from './titles/titlesCard.vue';
export default {
    name: 'AppMain',
    data() {
        return { store }
    },
    components: { titlesCard }
}
</script>

<template>
    <main class="container">
        <section>
            <h2>Movies</h2>
            <titles-card v-for="movie in store.movies" :key="movie.id" :item="movie"></titles-card>
        </section>
        <section>
            <h2>Series</h2>
            <titles-card v-for="serie in store.series" :key="serie.id" :item="serie"></titles-card>
        </section>
    </main>
</template>

<style lang="scss" scoped>

</style>

