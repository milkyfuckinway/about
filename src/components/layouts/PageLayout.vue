<script setup>
import MainHeader from '@blocks/MainHeader.vue'
</script>

<template>
	<MainHeader v-if="$route.name !== 'home' || $route.name == 'error'" class="header"> </MainHeader>
	<main class="main" :class="{ container: $route.name == 'home' }">
		<slot />
	</main>
</template>


<!-- import MainFooter from '@blocks/MainFooter.vue' -->
<!-- <MainFooter v-if="$route.name !== 'error'" class="footer"> </MainFooter> -->
