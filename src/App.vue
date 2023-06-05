<script setup>
import PageLayout from './components/layouts/PageLayout.vue';
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
	AOS.init();

	(function calculateHeaderOffset() {
		const main = document.querySelector('main');
		const header = document.querySelector('header');
		const setHeaderOffset = () =>
			(main.style.marginTop = `${header.offsetHeight}px`);
			setHeaderOffset();
		window.addEventListener('resize', setHeaderOffset);
	})();
});
</script>

<template>
	<PageLayout>
		<router-view></router-view>
	</PageLayout>
</template>
