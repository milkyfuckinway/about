<script setup>
import data from '@data/data.json';
import TemplateSkills from '@blocks/TemplateSkills.vue';
import TemplateSection from '@blocks/TemplateSection.vue';

const softskills = data.softskills;
</script>

<template>
	<TemplateSection title="Soft skills">
		<TemplateSkills :json-object="softskills"></TemplateSkills>
	</TemplateSection>
</template>
