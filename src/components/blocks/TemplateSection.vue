<script setup>
const props = defineProps({
	title: {
		type: String,
		default: () => 'Title',
	},
});
</script>

<template>
	<section>
		<div
			class="container"
			data-aos="fade-up">
			<h2>{{ props.title }}</h2>
			<slot />
		</div>
	</section>
</template>
