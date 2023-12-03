<script setup lang="ts">
import { TITLE, DESCRIPTION } from '~/constants/Banner.ts';
</script>

<template>
    <div class="banner__container">
        <h1 class="banner__title">{{ TITLE }}</h1>
        <p
            v-for="(desc, index) in DESCRIPTION"
            :key="index"
            class="banner__description"
        >
            {{ desc }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
.banner__container {
    height: calc(100% - 9rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--white-color);
    .banner__title {
        font-weight: 700;
        font-size: 6rem;
    }

    .banner__description {
        font-size: 2.5rem;
        margin-top: 3rem;
    }
}
</style>
