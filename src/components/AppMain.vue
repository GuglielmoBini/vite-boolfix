<script>
import { store } from '../data/store';
export default {
    name: 'AppMain',
    data() {
        return { store }
    }
}
</script>

<template>
    <main class="container d-flex flex-column align-items-center">
        <ul class="my-5 w-50" v-for="movie in store.movies" :key="movie.id">
            <li>Titolo: {{ movie.title }}</li>
            <li>Titolo originale: {{ movie.original_title }}</li>
            <li>Lingua: {{ movie.original_language }}</li>
            <li>Voto: {{ movie.vote_average }}</li>
            <li>Trama: {{ movie.overview }}</li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>

</style>