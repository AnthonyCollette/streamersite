<template>
	<Nav />
	<div class="container">
		<h1>A venir...</h1>
	</div>
	<Footer />
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'Events',
	components: {
		Nav,
		Footer,
	},
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	justify-content: center;
	padding: 100px 0 200px;
}
</style>
