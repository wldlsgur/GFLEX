import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './MainPage.vue';
import SearchPage from './SearchPage.vue';
import MovieInfoPage from './MovieInfoPage.vue';
import NotFound from '~/components/common/NotFound.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: MainPage,
        },
        {
            name: 'Search',
            path: '/search/:keyword',
            component: SearchPage,
            children: [
                {
                    name: 'Movie',
                    path: '/movie/:id',
                    component: MovieInfoPage,
                },
            ],
        },
        {
            path: '/:notFound(.*)',
            component: NotFound,
        },
    ],
});
