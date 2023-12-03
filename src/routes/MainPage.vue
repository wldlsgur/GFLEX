<script setup lang="ts">
import { computed } from 'vue';
import { BANNER_IMAGE_URL } from '~/constants/Banner.ts';
import Banner from '~/components/Banner.vue';

const backgroundStyle = computed(() => ({
    backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.8) 0,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0.8) 100%
    ), url('${BANNER_IMAGE_URL}')`,
}));
</script>

<template>
    <section
        class="banner"
        :style="backgroundStyle"
    >
        <Banner />
    </section>
</template>

<style lang="scss" scoped>
.banner {
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
