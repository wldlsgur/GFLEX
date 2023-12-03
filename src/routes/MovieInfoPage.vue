<script lang="ts" setup>
import { useMovieStore } from '~/store/Movie';
import { useRouter } from 'vue-router';
import MovieInfo from '~/components/MovieInfo.vue';

const movieStore = useMovieStore();
const router = useRouter();

const handleClick = (e: Event) => {
    const { target, currentTarget } = e;
    const { keyword } = movieStore;

    if (target !== currentTarget) {
        return;
    }

    if (!keyword) {
        return router.push({ name: 'Home' });
    }

    router.push({ name: 'Search', params: { keyword: movieStore.keyword } });
};
</script>

<template>
    <section
        class="info-wrap"
        @click="handleClick"
    >
        <MovieInfo />
    </section>
</template>

<style lang="scss" scoped>
.info-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
