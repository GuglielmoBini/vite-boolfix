<script>
// importo
import SearchBar from './SearchBar.vue';
export default {
    name: 'AppHeader',
    components: { SearchBar },
    emits: ['searched-term', 'form-submitted']
}
</script>

<template>
    <!-- HEADER -->
    <header class="container-fluid">
        <div class="d-flex justify-content-between align-items-center h-100 mx-4">
            <h1 class="text-danger">BOOLFLIX</h1>
            <!-- barra di ricerca -->
            <search-bar @term-change="$emit('searched-term', $event)" @form-submit="$emit('form-submitted', $event)">
            </search-bar>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 130px;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
</style>