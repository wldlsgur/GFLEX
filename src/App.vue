<script setup lang="ts">
import MyHeader from '~/components/Header.vue';
</script>

<template>
    <div class="wrap">
        <MyHeader />
        <Transition>
            <RouterView />
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.wrap {
    height: 100%;
    border: 1px solid var(--bg-color);
    background-color: var(--bg-color);
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
