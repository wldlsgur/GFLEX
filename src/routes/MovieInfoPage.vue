<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useMovieStore } from '~/store/Movie';
import MovieInfo from '~/components/MovieInfo.vue';

const movieStore = useMovieStore();
const { keyword } = storeToRefs(movieStore);
const router = useRouter();

const handleClick = (e: Event) => {
    const { target, currentTarget } = e;

    if (target !== currentTarget) {
        return;
    }

    if (!keyword.value) {
        return router.push({ name: 'Home' });
    }

    router.push({ name: 'Search', params: { keyword: keyword.value } });
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
