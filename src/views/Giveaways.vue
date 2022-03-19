<template>
	<Nav />
	<div class="giveaways">
		<div class="container">
			<h1>GIVEAWAY</h1>
			<p>Les giveaways sont organisés comme suit :</p>
			<p>
				Lorsqu'un Subgoal est atteint, avec Elendielle, un giveaway va être
				organisé afin de vous offrir divers petits cadeaux/goodies en plus du
				défi du subgoal. Pour participer, une annoce sera faite en live,
				annonçant le jour du concours. Le jour du live, l'organisation vous sera
				expliquée (je tente de changer un peu selon mon envie).
			</p>
			<p>
				En général, vous pourrez gagner : des patounes magnétique // un
				marque-page et un porte-clef qui seront à l'effigie de la chaîne, et
				bien d'autres choses encore. Si vous voulez un aperçu, les photos des
				gagnants sont ci-dessous.
			</p>
			<p>Soyez les prochains gagnants, venez participer !!!</p>
			<h2>Les prochains giveaways</h2>
			<ul class="next-giveaways">
				<Giveaway
					v-for="(item, index) in nextgiveaways[0]"
					:key="index"
					:nextgiveaways="nextgiveaways[0][index]"
				/>
			</ul>
			<h2>Les gagnants</h2>
			<ul class="winners">
				<Winner
					v-for="(winner, index) in winners[0]"
					:key="index"
					:winner="winners[0][index]"
				/>
			</ul>
		</div>
	</div>

	<Footer />
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import Winner from '@/components/Winner.vue'
import Giveaway from '@/components/Giveaway.vue'
import axios from 'axios'

export default {
	name: 'Giveaways',
	components: {
		Nav,
		Footer,
		Winner,
		Giveaway,
	},
	data() {
		return {
			nextgiveaways: [],
			winners: [],
		}
	},
	created() {
		const fetchNextGiveaways = axios
			.get('http://localhost:3000/api/nextgiveaway/getAll')
			.then((res) => this.nextgiveaways.push(res.data))
			.catch((error) => console.log(error))
		const fetchWinners = axios
			.get('http://localhost:3000/api/winner/getAll')
			.then((res) => this.winners.push(res.data))
			.catch((error) => console.log(error))
	},
}
</script>

<style lang="scss" scoped>
.giveaways {
	background: rgb(56, 151, 213);
	background: linear-gradient(
		90deg,
		rgba(56, 151, 213, 1) 0%,
		rgba(125, 189, 82, 1) 100%
	);
	color: $color-001;
	.container {
		padding: 100px 0 200px;
		.winners {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			justify-content: space-around;
		}
		h1 {
			margin: 0 auto 50px;
			width: fit-content;
			width: -moz-fit-content;
		}
		p {
			margin-bottom: 20px;
		}
		h2 {
			margin-top: 100px;
		}
	}
	.next-giveaways {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
}
</style>
