<template>
	<Nav />
	<div class="links">
		<div class="overlay">
			<div class="container">
				<h1>Liens utiles</h1>
				<ul class="links-wrapper">
					<Link v-for="(link, index) in links[0]" :key="index" :link="link" />
				</ul>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script>
import axios from 'axios'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import Link from '@/components/Link.vue'

export default {
	name: 'Links',
	components: {
		Nav,
		Footer,
		Link,
	},
	data() {
		return {
			links: [],
		}
	},
	created() {
		const fetchLinks = axios
			.get('http://localhost:3000/api/links/getAll')
			.then((res) => this.links.push(res.data))
			.catch((error) => console.log(error))
	},
}
</script>

<style lang="scss" scoped>
.links {
	background: linear-gradient(to left, $color-006, $color-003);
	.overlay {
		background-color: rgba($color: $color-002, $alpha: 0.2);
		padding: 100px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.container {
		padding: 100px 0 200px;
		.links-wrapper {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
		}
		h1 {
			width: fit-content;
			width: -moz-fit-content;
			margin: 0 auto 50px;
			color: $color-001;
		}
	}
}
</style>
