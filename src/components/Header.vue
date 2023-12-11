<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Icon from './common/Icon.vue';
import { TITLE } from '~/constants/Logo.ts';
import { useMovieStore } from '~/store/Movie';
import { storeToRefs } from 'pinia';

const router = useRouter();
const movieStore = useMovieStore();
const { keyword } = storeToRefs(movieStore);

const $input = ref<HTMLInputElement | null>(null);

const handleClick = () => {
    router.push({ name: 'Home' });
};
const handleInput = (e: Event) => {
    const { target } = e;

    if (target instanceof HTMLInputElement) {
        movieStore.updateKeyword(target.value);
    }
};
const handleSearch = () => {
    if (!keyword.value.trim()) {
        return;
    }

    router.push({ name: 'Search', params: { keyword: keyword.value.trim() } });
};
const focusOnInput = () => {
    const { value } = $input;

    if (value instanceof HTMLInputElement) {
        value.focus();
    }
};

onMounted(() => {
    focusOnInput();
});
</script>

<template>
    <header class="header">
        <div class="header__container">
            <div class="logo">
                <Icon @click="handleClick">live_tv</Icon>
                <h1
                    class="logo__title"
                    @click="handleClick"
                >
                    {{ TITLE }}
                </h1>
            </div>

            <form
                class="search"
                @submit.prevent="handleSearch"
            >
                <input
                    ref="$input"
                    class="search__input"
                    placeholder="영화 이름을 검색하세요"
                    :value="keyword"
                    @input="handleInput"
                />
                <Icon @click="handleSearch">SEARCH</Icon>
            </form>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    height: 9rem;
    z-index: 9;

    > .header__container {
        display: flex;
        align-items: center;
        margin: 0 auto;
        > .logo {
            display: flex;
            margin: 0 2rem 0 0;

            .logo__title {
                display: flex;
                align-items: center;
                color: var(--red-color);
                font-size: 2.5rem;
                font-weight: 700;
                margin-left: 2rem;
                cursor: pointer;
            }
        }

        > .search {
            width: 50rem;
            display: flex;
            background-color: var(--input-color);
            border-radius: 10px;
            padding: 0 2rem 0 2rem;
            height: 5rem;
            border: 1px solid var(--red-color);

            > .search__input {
                flex-grow: 1;
                border: none;
                border-radius: 10rem;
                background: none;
                font-size: 2rem;
                letter-spacing: 2px;
                color: var(--white-color);

                &::placeholder {
                    color: var(--placeholder-color);
                }
            }

            :deep(.icon) {
                margin-left: 1rem;
            }
        }
    }
}
</style>
