<script>
import SearchBar from './SearchBar.vue';
export default {
    name: 'AppHeader',
    components: { SearchBar },
    emits: ['searched-term']
}
</script>

<template>
    <header class="d-flex justify-content-center">
        <search-bar @search="$emit('searched-term', $event)"></search-bar>
    </header>
</template>

<style lang="scss" scoped>

</style>