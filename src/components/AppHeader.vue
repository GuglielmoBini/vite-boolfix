<script>
import SearchBar from './SearchBar.vue';
export default {
    name: 'AppHeader',
    components: { SearchBar },
    emits: ['searched-term', 'form-submitted']
}
</script>

<template>
    <header class="d-flex justify-content-center">
        <search-bar @term-change="$emit('searched-term', $event)"
            @form-submit="$emit('form-submitted', $event)"></search-bar>
    </header>
</template>

<style lang="scss" scoped>

</style>