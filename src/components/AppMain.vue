<script>
// importo
import { store } from '../data/store';
import TitlesSection from './titles/TitlesSection.vue';
import appLoader from './AppLoader.vue';
export default {
    name: 'AppMain',
    data() {
        return { store }
    },
    components: { TitlesSection, appLoader }
}
</script>

<template>
    <!-- MAIN -->
    <main class="container-fluid text-white">
        <div v-if="!store.movies.length && !store.series.length"
            class="search-message d-flex justify-content-center align-items-center">
            <h1>CERCA UN FILM O UNA SERIE TV</h1>
        </div>
        <section v-else id="productions">
            <!-- loader -->
            <app-loader v-if="store.isLoading"></app-loader>
            <!-- sezione titoli -->
            <div v-else class="text-center">
                <titles-section v-if="store.movies.length" title="Movies" collection="movies"></titles-section>
                <titles-section v-if="store.series.length" title="Series" collection="series"></titles-section>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
main {
    min-height: 100vh;
    background-color: #555;
    padding: 130px 0 50px 0;

    .search-message {
        height: calc(100vh - 180px);

        h1 {
            text-shadow: 0 0 5px black;
        }
    }

}
</style>

