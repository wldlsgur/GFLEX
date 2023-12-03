<template>
    <div class="loader"></div>
</template>

<style lang="scss" scoped>
.loader {
    width: 5rem;
    height: 5rem;
    border: 3px solid var(--red-color);
    border-top-color: transparent;
    border-radius: 50%;
    animation: spinning 1s infinite linear;
}

@keyframes spinning {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
