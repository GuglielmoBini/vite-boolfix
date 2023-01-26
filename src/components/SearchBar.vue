<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            searchTerm: ''
        }
    },
    emits: ['search']
}
</script>

<template>
    <div class="input-group w-25 my-5">
        <input class="form-control" type="text" placeholder="cerca..." v-model.trim="searchTerm"
            @keyup.enter="$emit('search', searchTerm)">
        <button class="btn btn-primary" type="button" @click="$emit('search', searchTerm)">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>

</style>