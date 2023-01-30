<script>
// importo
import axios from 'axios';
import { store } from './data/store';
import { baseUri, apiKey, language } from './data';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'Boolfix',
  data() {
    return { store, searchWord: '' }
  },
  computed: {
    config() {
      return {
        params: {
          language: language,
          api_key: apiKey,
          query: this.searchWord
        }
      }
    }
  },
  methods: {
    // aggiorno filtro titoli
    updateTitleFilter(term) {
      this.searchWord = term
    },
    searchTitles() {
      //chiamo API e cerco titoli
      if (!this.searchWord) {
        store.movies = [];
        store.series = [];
        return
      }

      this.fetchApi('search/movie', 'movies')
      this.fetchApi('search/tv', 'series')
    },
    fetchApi(endpoint, collection) {
      // funzione per cercare titoli
      store.isLoading = true
      axios.get(`${baseUri}/${endpoint}`, this.config)
        .then(res => { store[collection] = res.data.results })
        .catch(err => { console.error(err) })
        .then(() => {
          store.isLoading = false
        })
    }
  },
  components: { AppHeader, AppMain }
}
</script>

<template>
  <app-header @searched-term="updateTitleFilter" @form-submitted="searchTitles"></app-header>
  <app-main></app-main>
</template>

<style lang="scss">

</style>
