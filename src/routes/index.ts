import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: () => import('./MainPage.vue'),
        },
        {
            name: 'Search',
            path: '/search/:keyword',
            component: () => import('./SearchPage.vue'),
            children: [
                {
                    name: 'Movie',
                    path: '/movie/:id',
                    component: () => import('./MovieInfoPage.vue'),
                },
            ],
        },
        {
            path: '/:notFound(.*)',
            component: () => import('~/components/common/NotFound.vue'),
        },
    ],
});
