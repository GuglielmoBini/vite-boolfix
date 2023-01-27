<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            term: ''
        }
    },
    emits: ['term-change', 'form-submit']
}
</script>

<template>
    <form class="input-group w-25 my-5" @submit.prevent="$emit('form-submit')">
        <input class="form-control" type="text" placeholder="cerca..." v-model.trim="term"
            @keyup="$emit('term-change', term)">
        <button class="btn btn-danger" type="submit">Cerca</button>
    </form>
</template>

<style lang="scss" scoped>

</style>