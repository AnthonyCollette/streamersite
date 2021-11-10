<template>
	<nav>
		<div class="container">
			<div class="brand">
				<router-link to="/"
					><img src="../../public/images/logo.svg" alt="Logo Neikko"
				/></router-link>
			</div>
			<ul class="nav-items">
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
			nav: [
				{
					text: 'Home',
					url: '/',
				},
				{
					text: 'Jeux',
					url: '/',
				},
				{
					text: 'Giveaway',
					url: '/',
				},
				{
					text: 'Screenshots',
					url: '/',
				},
				{
					text: 'Recommandations',
					url: '/',
				},
				{
					text: 'Évenements',
					url: '/',
				},
				{
					text: 'Liens utiles',
					url: '/',
				},
				{
					text: 'News',
					url: '/',
				},
				{
					text: 'Contact',
					url: '/',
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
		.brand {
			img {
				width: 200px;
			}
		}
		.nav-items {
			display: flex;
			li {
				margin-left: 20px;
				a {
					color: $color-002;
					&:hover {
						color: $color-003;
					}
				}
			}
		}
	}
}
</style>
