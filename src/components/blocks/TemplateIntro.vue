<script setup>
const props = defineProps({
	title: {
		type: String,
		default: () => 'Title',
	},
	paragraph: {
		type: String,
		default: () => 'Paragraph',
	},
});
</script>

<template>
	<section class="intro">
		<div
			class="container"
			data-aos="fade-down">
			<h2 class="intro__title">{{ props.title }}</h2>
			<p class="intro__description">{{ props.paragraph }}</p>
		</div>
	</section>
</template>

<style lang="scss">
.intro {
	display: flex;
}

.intro__title {
	font-size: 64px;

	@include vp-767 {
		font-size: 48px;
	}
}

.intro__description {
	font-size: 30px;

	@include vp-767 {
		font-size: 24px;
	}
}
</style>
