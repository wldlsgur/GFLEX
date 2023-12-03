<script lang="ts" setup>
import { computed } from 'vue';
import { useMovieStore } from '~/store/Movie';

const movieStore = useMovieStore();

const enhancedPoster = computed(() => {
    if (movieStore.movie.Poster) {
        return movieStore.movie.Poster.replace('SX300', 'SX700');
    }
    return '';
});
</script>

<template>
    <div
        v-if="!movieStore.isLoading"
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
                <h1>{{ movieStore.movie.Title }} /</h1>
                <span>{{ movieStore.movie.Year }}</span>
            </div>
            <div>
                <span>{{ movieStore.movie.Language }} / </span>
                <span>{{ movieStore.movie.Country }}</span>
            </div>

            <span>Released : {{ movieStore.movie.Released }}</span>
            <span>Runtime : {{ movieStore.movie.Runtime }}</span>
            <span>Genre : {{ movieStore.movie.Genre }}</span>
            <span>Awards : {{ movieStore.movie.Awards }}</span>
            <span>Director : {{ movieStore.movie.Director }}</span>
            <span>Writer : {{ movieStore.movie.Writer }}</span>
            <span>Actors : {{ movieStore.movie.Actors }}</span>
            <p>Plot : {{ movieStore.movie.Plot }}</p>
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
