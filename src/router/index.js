// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        {
            path: '/catalogue', name: 'catalogue',
            component: () => import('@/views/CatalogueView.vue')
        }, // lazy loading
        {
            path: '/livres/:id', name: 'book', props: true,
            component: () => import('@/views/BookView.vue')
        },
        {
            path: '/contact', name: 'contact',
            component: () => import('@/views/ContactView.vue')
        },
        {
            path: '/:pathMatch(.*)*', name: 'not-found',
            component: () => import('@/views/NotFoundView.vue')
        },
    ],
    scrollBehavior: () => ({ top: 0 }),
})
