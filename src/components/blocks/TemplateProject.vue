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
	specsLink: {
		type: String,
		default: () => '#',
	},
	gitLink: {
		type: String,
		default: () => '#',
	},
	projectLink: {
		type: String,
		default: () => '#',
	},
	resultLink: {
		type: String,
		default: () => '#',
	},
});
</script>

<template>
	<section class="project">
		<div
			class="container"
			data-aos="fade-up">
			<h2 class="project__title">{{ props.title }}</h2>
			<p class="project__description">{{ props.paragraph }}</p>
			<div class="project__links">
				<p>Ссылки:</p>
				<a :href="props.specsLink">Тз</a>
				<a :href="props.gitLink">Гитхаб</a>
				<a :href="props.projectLink">Деплой</a>
				<a :href="props.resultLink">Результат</a>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.project__links {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 20px;
	margin-bottom: 20px;

	& p {
		margin: 0;
		font-size: 24px;

		@include vp-767 {
			font-size: 18px;
		}
	}

	& a {
		margin: 0;
		font-size: 24px;

		@include vp-767 {
			font-size: 18px;
		}
	}

	& a[href='#'] {
		text-decoration: line-through;
		opacity: 0.3;
		pointer-events: none;
	}
}
</style>
