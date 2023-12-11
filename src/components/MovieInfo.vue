<script lang="ts" setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useMovieStore } from '~/store/Movie';

const movieStore = useMovieStore();
const { movie, isLoading } = storeToRefs(movieStore);

const enhancedPoster = computed(() => {
    if (movie.value?.Poster) {
        return movie.value.Poster.replace('SX300', 'SX700');
    }
    return '';
});
</script>

<template>
    <div
        v-if="!isLoading"
        class="info"
    >
        <div class="info__image">
            <img
                :src="enhancedPoster !== 'N/A' ? enhancedPoster : '/src/assets/NonImage.jpg'"
                alt="movie-image"
            />
        </div>
        <div class="info__content">
            <div>
                <h1>{{ movie?.Title }} /</h1>
                <span>{{ movie?.Year }}</span>
            </div>
            <div>
                <span>{{ movie?.Language }} / </span>
                <span>{{ movie?.Country }}</span>
            </div>

            <span>Released : {{ movie?.Released }}</span>
            <span>Runtime : {{ movie?.Runtime }}</span>
            <span>Genre : {{ movie?.Genre }}</span>
            <span>Awards : {{ movie?.Awards }}</span>
            <span>Director : {{ movie?.Director }}</span>
            <span>Writer : {{ movie?.Writer }}</span>
            <span>Actors : {{ movie?.Actors }}</span>
            <p>Plot : {{ movie?.Plot }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.info {
    display: flex;
    width: 80%;
    height: 80%;
    background-color: var(--bg-color);

    > .info__image {
        flex-basis: 30%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        > img {
            max-height: 100%;
            border-radius: 10px;
            object-fit: contain;
        }
    }

    > .info__content {
        padding: 2rem 2rem 2rem 2rem;
        color: var(--white-color);
        height: 100%;
        flex-grow: 1;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        letter-spacing: 2px;

        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */

        /* Chrome, Safari and Opera */
        &::-webkit-scrollbar {
            display: none;
        }

        > div {
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--red-color);
            font-weight: 700;

            > span {
                height: 100%;
            }
        }
        h1 {
            font-size: 2.5rem;
        }

        p,
        span {
            font-size: 2rem;
            margin: 1rem 0 0 0;
        }

        p {
            letter-spacing: 3px;
        }
    }
}
</style>
