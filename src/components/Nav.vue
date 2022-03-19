<template>
	<nav>
		<div class="container">
			<div class="brand">
				<router-link to="/"
					><img src="../../public/images/logo.svg" alt="Logo Neikko"
				/></router-link>
			</div>
			<button class="burger" @click="this.burger = !this.burger">
				<div
					class="line1 line"
					:class="burger ? 'line-1-transformed' : ''"
				></div>
				<div
					class="line2 line"
					:class="burger ? 'line-2-transformed' : ''"
				></div>
				<div
					class="line3 line"
					:class="burger ? 'line-3-transformed' : ''"
				></div>
			</button>
			<ul
				class="nav-items"
				id="menu"
				:class="burger ? 'display-flex' : ''"
				@click="this.burger = false"
			>
				<li v-for="(item, index) in nav" :key="item">
					<router-link :to="nav[index].url">{{ nav[index].text }}</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Nav',
	data() {
		return {
			burger: false,
			nav: [
				{
					text: 'Home',
					url: '/',
				},
				{
					text: 'Jeux',
					url: '/games',
				},
				{
					text: 'Giveaways',
					url: '/giveaways',
				},
				{
					text: 'Évenements',
					url: '/events',
				},
				{
					text: 'Liens utiles',
					url: '/links',
				},
				{
					text: 'News FFXIV',
					url: '/news-ffxiv',
				},
				{
					text: 'Contact',
					url: '/contact',
				},
			],
		}
	},
}
</script>

<style lang="scss" scoped>
nav {
	padding: 20px 0;
	background-color: $color-001;
	box-shadow: 0 5px 5px rgba($color: $color-002, $alpha: 0.8);
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: $font-002;
		position: relative;
		button {
			background-color: transparent;
			border: none;
		}
		.line {
			height: 3px;
			width: 25px;
			background-color: $color-003;
			margin: 5px;
		}
		.line-2 {
			opacity: 100%;
		}
		.brand {
			img {
				width: 150px;
				@include min($sm) {
					width: 200px;
				}
			}
		}
		.nav-items {
			display: none;
			flex-direction: column;
			position: absolute;
			top: 100%;
			right: 0;
			background-color: $color-001;
			padding: 20px 40px 20px 20px;
			z-index: 999;
			@include min($lg) {
				display: flex;
				flex-direction: row;
				position: relative;
				padding: 0;
				inset: 0 0 0 0;
			}
			li {
				margin-left: 20px;
				margin-top: 20px;
				@include min($lg) {
					margin-top: 0;
				}
				a {
					color: $color-002;
					&:hover {
						color: $color-003;
					}
				}
			}
		}
		.line-1-transformed {
			transform: rotate(45deg) translateX(7px) translateY(8px);
		}
		.line-2-transformed {
			opacity: 0;
		}
		.line-3-transformed {
			transform: rotate(-45deg) translateX(3px) translateY(-5px);
		}
		.burger {
			display: block;
			@include min($lg) {
				display: none;
			}
		}
		.display-flex {
			display: flex;
		}
	}
}
</style>
