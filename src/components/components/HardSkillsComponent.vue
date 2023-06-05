<script setup>
import data from '@data/data.json';
import TemplateSkills from '@blocks/TemplateSkills.vue';
import TemplateSection from '@blocks/TemplateSection.vue';

const hardskills = data.hardskills;
</script>

<template>
	<TemplateSection title="Hard skills">
		<TemplateSkills :json-object="hardskills"></TemplateSkills>
	</TemplateSection>
</template>
