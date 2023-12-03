<script setup lang="ts"></script>

<template>
    <div class="icon">
        <span class="material-symbols-outlined">
            <slot></slot>
        </span>
    </div>
</template>

<style scoped lang="scss">
.icon {
    color: var(--white-color);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > .material-symbols-outlined {
        font-size: 3rem;
    }
}
</style>
