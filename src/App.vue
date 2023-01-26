<script>
import axios from 'axios';
import { store } from './data/store';
import { baseUri, apiKey } from './data';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'Boolfix',
  data() {
    return { store }
  },
  methods: {
    fetchMovies(query) {
      axios.get(`${baseUri}/search/movie?api_key=${apiKey}&query=${query}`)
        .then(res => {
          const movies = res.data.results
          store.movies = movies.map(movie => {
            const { id, title, original_title, original_language, vote_average, overview, poster_path } = movie;
            return { id, title, original_title, original_language, vote_average, overview, poster_path }
          })
        })
    }
  },
  components: { AppHeader, AppMain }
}
</script>

<template>
  <app-header @searched-term="fetchMovies"></app-header>
  <app-main></app-main>
</template>

<style lang="scss">

</style>
