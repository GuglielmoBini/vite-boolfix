<script>
import { baseImgUri } from '../../data';
export default {
    name: 'titlesCard',
    props: {
        item: Object
    },
    methods: {
        changeVoteToStar(vote) {
            const dividedVote = Math.floor(vote / 2);
            let stars = '';
            if (dividedVote) {
                for (let i = 0; i < dividedVote; i++) {
                    stars += `<i class="fa-solid fa-star text-warning"></i>`;
                }
            } else { stars = 'Nessun voto' }
            return stars
        }
    },
    computed: {
        hasFlag() {
            const flags = ['it', 'en'];
            return flags.includes(this.item.original_language)
        },
        flagSrc() {
            const url = new URL(`../../assets/img/${this.item.original_language}.png`, import.meta.url);
            return url.href;
        },
        createImg() {
            const poster = `${baseImgUri}${this.item.poster_path}`;
            return poster
        }
    }
}
</script>

<template>
    <ul class="my-5 w-50 text-center">
        <li>Titolo: {{ item.title || item.name }}</li>
        <li>Titolo originale: {{ item.original_title || item.original_name }}</li>
        <li>
            <span>Lingua: </span>
            <img class="flag" v-if="hasFlag" :src="flagSrc" :alt="item.original_language">
            <span v-else>{{ item.original_language }}</span>
        </li>
        <li v-html="changeVoteToStar(item.vote_average)"></li>
        <li>Trama: {{ item.overview }}</li>
        <li>
            <img v-if="item.poster_path" class="poster" :src="createImg"
                :alt="item.original_title || item.original_name">
        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    list-style-type: none;


}

.flag {
    max-width: 50px;
}
</style>