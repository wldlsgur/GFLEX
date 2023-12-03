<script lang="ts" setup>
import MovieItems from '~/components/MovieItems.vue';
</script>

<template>
    <section class="movie">
        <MovieItems />
        <Transition>
            <RouterView />
        </Transition>
    </section>
</template>

<style lang="scss" scoped>
.movie {
    position: relative;
    height: 100%;
    padding: 9rem 0 0 0;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
