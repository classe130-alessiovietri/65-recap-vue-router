	
import { createRouter, createWebHistory } from 'vue-router';
 
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductPage from './pages/ProductPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
 
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/prodotti',
            name: 'products-index',
            component: ProductsPage
        },
        {
            path: '/prodotti/:slug',
            name: 'products-show',
            component: ProductPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        }
    ]
});
 
export { router };