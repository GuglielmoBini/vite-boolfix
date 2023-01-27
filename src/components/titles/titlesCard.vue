<script>
export default {
    name: 'titlesCard',
    props: {
        item: Object
    },
    computed: {
        hasFlag() {
            const flags = ['it', 'en'];
            return flags.includes(this.item.original_language)
        },
        flagSrc() {
            const url = new URL(`../../assets/img/${this.item.original_language}.png`, import.meta.url);
            return url.href;
        }
    }
}
</script>

<template>
    <ul class="my-5 w-50">
        <li>Titolo: {{ item.title || item.name }}</li>
        <li>Titolo originale: {{ item.original_title || item.original_name }}</li>
        <li>
            <span>Lingua: </span>
            <img v-if="hasFlag" :src="flagSrc" :alt="item.original_language">
            <span v-else>{{ item.original_language }}</span>
        </li>
        <li>Voto: {{ item.vote_average }}</li>
        <li>Trama: {{ item.overview }}</li>
    </ul>
</template>

<style lang="scss" scoped>
li>img {
    max-width: 50px;
}
</style>