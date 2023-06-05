<script setup>
import data from '@data/data.json';
import TemplateSkills from '@blocks/TemplateSkills.vue';
import TemplateSection from '@blocks/TemplateSection.vue';

const otherSkills = data.otherskills;
</script>

<template>
	<TemplateSection title="Other">
		<TemplateSkills :json-object="otherSkills"></TemplateSkills>
	</TemplateSection>
</template>
