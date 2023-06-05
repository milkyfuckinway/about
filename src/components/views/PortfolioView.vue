<script setup>
import TemplateIntro from '@blocks/TemplateIntro.vue';
import TemplateProject from '@blocks/TemplateProject.vue';
</script>

<template>
	<TemplateIntro
		title="Портфолио"
		paragraph="Здесь я не буду выставлять работы, которые делал обучаясь, по месяцу и с наставниками,
		я выставлю работы, которые делал в рамках грейдирования и акселерации, потому что условия
		были приближены к реальной разработке" />
	<TemplateProject
		title="Drink2Go"
		paragraph="Проект в рамках грейдирования, служит для оценки навыков полученных во время обучения,
		никаких помошников и наставников, только ты и то, что ты вынес во время обучения, из интересного сам первый раз сделал кастомный селект, мобильное меню-выпадашка, прикрутил свайпер, оживил range"
		specs-link="/about/assets/images/drink2gospecs.webp"
		project-link="https://milkyfuckinway.github.io/drink2go/"
		git-link="https://github.com/milkyfuckinway/drink2go"
		result-link="/about/assets/images/drink2go.webp" />
	<TemplateProject
		title="Smart Device"
		paragraph="Первый проект акселерации, не сложный но пришлось быстро адаптироваться под новую сборку, desktop-first,
			 из особенностей фикс шапка, модалка, валидация, аккордеон"
		specs-link="https://htmlacademy.notion.site/Smart-Device-abcd11775545458390e9f2271f51cebb"
		project-link="https://milkyfuckinway.github.io/smartdevice/"
		git-link="https://github.com/milkyfuckinway/smartdevice"
		result-link="/about/assets/images/smartdevice.webp" />
	<TemplateProject
		title="Круизы в Антарктику"
		paragraph="Второй проект акселерации, тут я решил перейти на уже знакомый pug и из-за этого снова пришлось адаптироваться под новую сборку,
		особенности в этом проекте это яндекс карта, с которой я тоже был знаком, мобильное меню-выпадашка и карточки товаров"
		specs-link="https://htmlacademy.notion.site/0f2c2429ab174dbd97c53c585ada8bd7"
		project-link="https://milkyfuckinway.github.io/antarctica/"
		git-link="https://github.com/milkyfuckinway/antarctica"
		result-link="/about/assets/images/antarctica.webp" />
	<TemplateProject
		title="Фитнесс"
		paragraph="Последний проект акселерации, снова pug, тут они решили оторваться, очень душный макет, видео, табы, слайдеры"
		specs-link="https://htmlacademy.notion.site/b6f8c5fa89ff40eba1f9b5f2c49dae55"
		project-link="https://milkyfuckinway.github.io/fitness/"
		git-link="https://github.com/milkyfuckinway/fitness"
		result-link="/about/assets/images/fitness.webp" />
	<TemplateProject
		title="Price"
		paragraph="Первый и пока единственный проект, который приносит кому-то пользу,
		помошник начинающего часовщика, который подскажет примерную цену на замену батарейки,
		навеяно прошой работой, только мобильная версия, так как в другой нет необходимости,
		в планах переписать но всё равно оставлю пока тут"
		specs-link="#"
		project-link="https://milkyfuckinway.github.io/price/"
		git-link="https://github.com/milkyfuckinway/price"
		result-link="#" />
</template>
