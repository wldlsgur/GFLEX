<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useMovieStore } from '~/store/Movie';
import MovieItem from '~/components/MovieItem.vue';
import Observer from '~/components/common/Observer.vue';
import Loader from '~/components/common/Loader.vue';

const movieStore = useMovieStore();
const { movies, keyword, page, isLoading } = storeToRefs(movieStore);

const handleShow = () => {
    movieStore.updatePage(page.value + 1);
    movieStore.getSearchedMovie({ s: keyword.value, page: movieStore.page });
};
</script>

<template>
    <div
        class="loader-container"
        :class="{ active: isLoading }"
    >
        <Loader />
    </div>
    <ul
        v-if="movies.length"
        class="movie-items"
    >
        <MovieItem
            v-for="movie in movies"
            :key="movie.imdbID"
            :movie="movie"
        />
        <Observer @show="handleShow" />
    </ul>
    <div
        v-if="!movies.length && !isLoading"
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

    &::-webkit-scrollbar {
        width: 5px; /* 스크롤바 너비 */
    }

    &::-webkit-scrollbar-track {
        background: black; /* 스크롤바 트랙의 배경색 */
    }

    &::-webkit-scrollbar-thumb {
        background: gray; /* 스크롤바 핸들의 배경색 */
    }

    &::-webkit-scrollbar-thumb:hover {
        background: red; /* 스크롤바 핸들을 호버했을 때의 배경색 */
    }
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
