<script setup></script>

<template>
	<header class="header">
		<div class="container">
			<nav class="navigation">
				<ul class="navigation__list">
					<li class="navigation__item">
						<RouterLink
							v-slot="{ route }"
							class="navigation__link"
							to="/"
							>{{ route.name }}</RouterLink
						>
					</li>
					<li class="navigation__item">
						<RouterLink
							v-slot="{ route }"
							class="navigation__link"
							to="/portfolio"
							>{{ route.name }}</RouterLink
						>
					</li>
					<li class="navigation__item">
						<RouterLink
							v-slot="{ route }"
							class="navigation__link"
							to="/links"
							>{{ route.name }}</RouterLink
						>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<style lang="scss">
.header {
	position: fixed;
	z-index: 9999;
	width: 100%;
	padding: 20px 0;
	background-color: $plt-dark;
	box-shadow: 0 0 10px 0 $color-default-black;
}

.navigation__list {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	align-items: center;
	justify-content: flex-start;
	margin: 0;
	padding: 0;
	list-style: none;
}

.header a {
	position: relative;
	color: $plt-white;
	font-size: 22px;
	line-height: 150%;

	&.is-active {
		opacity: 0.8;
		pointer-events: none;

		&::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 2px;
			background-color: $plt-white;
		}
	}
}
</style>
