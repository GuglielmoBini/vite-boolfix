<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            term: ''
        }
    },
    methods: {
        clearTerm() {
            this.term = ''
        }
    },
    emits: ['term-change', 'form-submit']
}
</script>

<template>
    <form class="input-group w-25 my-5" @submit.prevent="$emit('form-submit')">
        <input class="form-control" type="text" placeholder="cerca..." v-model.trim="term"
            @keyup="$emit('term-change', term)" @keyup.enter="clearTerm">
        <button class="btn btn-danger" type="submit" @click="clearTerm">Invia</button>
    </form>
</template>

<style lang="scss" scoped>

</style>