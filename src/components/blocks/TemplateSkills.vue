<script setup>
const isMobile = () => {
	return window.innerWidth > 767;
};

const props = defineProps({
	jsonObject: {
		type: Object,
		default: () => ({ key: '1' }),
	},
});
</script>

<template>
	<div class="skills">
		<ul class="skills__list">
			<li
				v-for="(item, object, itemIndex) in props.jsonObject"
				:key="itemIndex"
				class="skills__item"
				data-aos="fade-up">
				<h3>{{ object }}</h3>
				<p
					v-for="(paragraph, paragraphIndex) in item"
					:key="paragraphIndex"
					data-aos="fade-up"
					class="skill__description"
					:data-aos-delay="isMobile() ? (itemIndex * item.length + paragraphIndex) * 100 : 0"
					:data-aos-duration="300">
					{{ paragraph }}
				</p>
			</li>
		</ul>
	</div>
</template>

<style lang="scss">
.skills__list {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 50px;
	margin: 0;
	padding: 0;
	list-style: none;

	@include vp-1023 {
		grid-template-columns: 1fr;
		gap: 30px;
	}
}
</style>
