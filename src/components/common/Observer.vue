<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useMovieStore } from '~/store/Movie';

const movieStore = useMovieStore();

const observerElement = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

const emit = defineEmits(['show']);

const createObserver = () => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !movieStore.isLoading && observer) {
                    emit('show');
                }
            });
        },
        {
            rootMargin: '0px',
            threshold: 1.0,
        },
    );

    if (observerElement.value) {
        observer.observe(observerElement.value);
    }
};
const deleteObserver = () => {
    if (observer) {
        observer.disconnect();
    }
};

onMounted(() => {
    createObserver();
});
onUnmounted(() => {
    deleteObserver();
});
</script>

<template>
    <div ref="observerElement"></div>
</template>
