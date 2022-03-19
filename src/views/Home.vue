<template>
	<div class="home">
		<div class="main">
			<Nav />
			<h1>LIVESTREAM</h1>
			<LiveStream :jokes="jokes" />
			<Socials />
			<Recommandations :friends="friends[0]" />
			<Twitter />
			<Footer />
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Nav from '@/components/Nav.vue'
import LiveStream from '@/components/LiveStream.vue'
import Twitter from '@/components/Twitter.vue'
import Recommandations from '@/components/Recommandations.vue'
import Footer from '@/components/Footer.vue'
import Socials from '@/components/Socials.vue'
export default {
	name: 'Home',
	components: {
		Nav,
		LiveStream,
		Twitter,
		Recommandations,
		Footer,
		Socials,
	},
	data() {
		return {
			jokes: '',
			friends: [],
		}
	},
	created() {
		const fetchJokes = axios
			.get('http://localhost:3000/api/joke/getAll')
			.then((res) => (this.jokes = res.data[0].text))
			.catch((error) => console.log(error))

		const fetchFriends = axios
			.get('http://localhost:3000/api/friend/getAll')
			.then((res) => this.friends.push(res.data))
			.catch((error) => console.log(error))
	},
}
</script>

<style lang="scss" scoped>
.home {
	// background-image: url('../assets/images/ByVMium.jpg');
	// background-size: cover;
	// background-repeat: no-repeat;
	background: radial-gradient($color-006, $color-003);
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
