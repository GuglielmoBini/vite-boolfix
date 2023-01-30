<script>
//importo
import { baseImgUri } from '../../data';
export default {
    name: 'titlesCard',
    props: {
        item: Object
    },
    computed: {
        hasFlag() {
            // flag per stampare bandiere
            const flags = ['it', 'en'];
            return flags.includes(this.item.original_language)
        },
        flagSrc() {
            // costruisco url immagine
            const url = new URL(`../../assets/img/${this.item.original_language}.png`, import.meta.url);
            return url.href;
        },
        createImg() {
            // creo poster
            let poster = '';
            if (this.item.poster_path) {
                poster = `${baseImgUri}${this.item.poster_path}`;
            } else {
                poster = 'src/assets/img/img-no.png';
            }
            return poster
        },
        dividedVote() {
            // divido voto medio
            return Math.floor(this.item.vote_average / 2);
        }
    }
}
</script>

<template>
    <div class="title-card flex-shrink-0 m-2">
        <!-- poster -->
        <figure class="poster h-100 m-0">
            <img class="img-fluid h-100" :src="createImg" :alt="item.original_title || item.original_name">
        </figure>
        <!-- info titolo -->
        <div class="title-info p-3">
            <div>Titolo: {{ item.title || item.name }}</div>
            <div>Titolo originale: {{ item.original_title || item.original_name }}</div>
            <div class="my-2">
                <span>Lingua: </span>
                <img class="flag" v-if="hasFlag" :src="flagSrc" :alt="item.original_language">
                <span v-else>{{ item.original_language }}</span>
            </div>
            <div class="my-3">
                <i v-for="i in 5" :class="i <= dividedVote ? 'fa-solid text-warning' : 'fa-regular'"
                    class="fa-star"></i>
            </div>
            <div v-if="item.overview" class="overview">
                <span>Trama:</span>
                <p>{{ item.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// card
.title-card {
    height: 513px;
    width: 342px;
    position: relative;
    box-shadow: 0;
    transition: box-shadow 0.5s;

    &:hover {
        box-shadow: 0 0 10px 3px lightgrey;
    }

    // poster
    .poster>img {
        object-fit: cover;
    }

    // info titolo
    .title-info {
        opacity: 0;
        text-shadow: 0 0 5px black;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: opacity 0.5s;
        background-color: rgba($color: black, $alpha: 0.8);


        &:hover {
            opacity: 1;
            cursor: pointer;
        }

        .flag {
            width: 40px;
            height: 20px;
            object-fit: cover;
        }

        .overview {
            max-height: 300px;
            overflow-y: auto;
        }

    }
}

.title-card,
.title-info,
.poster>img {
    border-radius: 10px;
}
</style>