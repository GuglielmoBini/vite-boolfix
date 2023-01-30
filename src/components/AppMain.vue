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
    <main class="container-fluid text-white">
        <div v-if="store.movies.length === 0 || store.series.length === 0"
            class="search-message d-flex justify-content-center align-items-center">
            <h1>CERCA UN FILM O UNA SERIE TV</h1>
        </div>
        <section v-else id="productions">
            <section id="movies">
                <h2 class="m-4">Movies</h2>
                <div class="d-flex flex-wrap justify-content-center">
                    <titles-card v-for="movie in store.movies" :key="movie.id" :item="movie"></titles-card>
                </div>
            </section>
            <section id="series">
                <h2 class="m-4">Series</h2>
                <div class="d-flex flex-wrap justify-content-center">
                    <titles-card v-for="serie in store.series" :key="serie.id" :item="serie"></titles-card>
                </div>
            </section>
        </section>
    </main>
</template>

<style lang="scss" scoped>
main {
    min-height: 100vh;
    background-color: #555555;
    padding: 130px 0 50px 0;

    .search-message {
        height: calc(100vh - 180px);

        h1 {
            text-shadow: 0 0 5px black;
        }
    }
}
</style>

