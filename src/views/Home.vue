<template>
	<div class="home">
		<div class="main">
			<Nav />
			<h1>LIVESTREAM</h1>
			<LiveStream />
			<Recommandations />
			<Twitter />
			<Footer />
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import LiveStream from '@/components/LiveStream.vue'
import Twitter from '@/components/Twitter.vue'
import Recommandations from '@/components/Recommandations.vue'
import Footer from '@/components/Footer.vue'
export default {
	name: 'Home',
	components: {
		Nav,
		LiveStream,
		Twitter,
		Recommandations,
		Footer,
	},
}
</script>

<style lang="scss" scoped>
.home {
	background-image: url('../assets/images/ByVMium.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	.main {
		background-color: rgba($color: $color-002, $alpha: 0.2);
	}
	h1 {
		margin: 100px auto 0;
		width: fit-content;
		width: -moz-fit-content;
		color: $color-001;
	}
}
</style>
