<script lang="ts" setup>
import type { MovieSummary } from '~/types/Movie';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{ movie: MovieSummary }>();
const { Title, Year, imdbID, Type, Poster } = props.movie;

const handleClick = () => {
    router.push({ name: 'Movie', params: { id: imdbID } });
};
</script>

<template>
    <li
        class="movie-item"
        @click="handleClick"
    >
        <img
            :src="Poster !== 'N/A' ? Poster : '/NonImage.jpg'"
            alt="movie-image"
        />
        <div class="movie-info">
            <h1 class="movie-info__title">Title : {{ Title }}</h1>
            <span class="movie-info__year">Year : {{ Year }}</span>
            <span class="movie-info__genre">Genre : {{ Type }}</span>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.movie-item {
    position: relative;
    display: flex;
    align-items: center;

    > img {
        width: 100%;
        border-radius: 10px;
        object-fit: contain;
        cursor: pointer;

        &:hover ~ .movie-info {
            visibility: visible;
        }
    }

    > .movie-info {
        width: 100%;
        height: 100%;
        padding: 0 2rem 0 2rem;
        position: absolute;
        left: 0;
        top: 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        background-color: rgba(0, 0, 0, 0.8);
        color: var(--white-color);
        font-size: 2rem;
        visibility: hidden;
        cursor: pointer;

        &:hover {
            visibility: visible;
        }
    }
}
</style>
