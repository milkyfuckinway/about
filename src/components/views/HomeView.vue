<script setup>
import AboutComponent from '@components/AboutComponent.vue';
import KnowledgeComponent from '@components/KnowledgeComponent.vue';
import EducationComponent from '@components/EducationComponent.vue';
import HardSkillsComponent from '@components/HardSkillsComponent.vue';
import SoftSkillsComponent from '@components/SoftSkillsComponent.vue';
import OtherSkillsComponent from '@components/OtherSkillsComponent.vue';
import ExtraComponent from '@components/ExtraComponent.vue';
import TemplateIntro from '@blocks/TemplateIntro.vue';
</script>

<template>
	<TemplateIntro
		title="Привет"
		paragraph="Меня зовут Женя, и это мой сайт" />
	<AboutComponent />
	<EducationComponent />
	<KnowledgeComponent />
	<HardSkillsComponent />
	<SoftSkillsComponent />
	<OtherSkillsComponent />
	<ExtraComponent />
</template>
