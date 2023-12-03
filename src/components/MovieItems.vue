<script lang="ts" setup>
import { useMovieStore } from '~/store/Movie';
import MovieItem from '~/components/MovieItem.vue';
import Observer from '~/components/common/Observer.vue';
import Loader from '~/components/common/Loader.vue';

const movieStore = useMovieStore();

const handleShow = () => {
    const { keyword, page } = movieStore;

    movieStore.updatePage(page + 1);
    movieStore.getSearchedMovie({ s: keyword, page: movieStore.page });
};
</script>

<template>
    <div
        class="loader-container"
        :class="{ active: movieStore.isLoading }"
    >
        <Loader />
    </div>
    <ul
        v-if="movieStore.movies.length"
        class="movie-items"
    >
        <MovieItem
            v-for="movie in movieStore.movies"
            :key="movie.imdbID"
            :movie="movie"
        />
        <Observer @show="handleShow" />
    </ul>
    <div
        v-if="!movieStore.movies.length && !movieStore.isLoading"
        class="no-search"
    >
        <h1>검색 결과가 없습니다.</h1>
    </div>
</template>

<style lang="scss" scoped>
.movie-items {
    padding: 5rem;
    height: 100%;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-auto-rows: minmax(auto, auto);
    gap: 5rem 5rem;
}

.no-search {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10rem;
    color: var(--white-color);
}
.loader-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9;
    visibility: hidden;

    &.active {
        visibility: visible;
    }
}
</style>
