import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	scrollBehavior() {
		return { top: 0 };
	},
	routes: [
		{
			path: '/',
			name: 'Главная',
			component: () => import('@views/HomeView.vue'),
		},
		{
			path: '/home',
			redirect: { name: 'home' },
		},
		{
			path: '/portfolio',
			name: 'Портфолио',
			component: () => import('@views/PortfolioView.vue'),
		},
		{
			path: '/links',
			name: 'Контакты',
			component: () => import('@views/LinksView.vue'),
		},
		{
			path: '/:pathMatch(.*)',
			name: 'error',
			component: () => import('@views/ErrorView.vue'),
		},
	],
	linkActiveClass: 'is-active',
});

export default router;
