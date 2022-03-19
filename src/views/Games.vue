<template>
	<Nav />
	<div class="container">
		<div class="overlay">
			<h1>Jeux terminés</h1>
			<ul>
				<GameDone
					v-for="(game, index) in gamesdone[0]"
					:key="index"
					:gamesdone="gamesdone[0][index]"
				/>
			</ul>
			<div class="newgames-wrapper" id="newgames-wrapper">
				<h2>Jeux à venir</h2>
				<svg
					version="1.1"
					id="Calque_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 200 100"
					style="enable-background: new 0 0 300 200"
					xml:space="preserve"
					class="left-arrow"
					v-if="isToRight"
					@click="toLeft"
				>
					<polygon
						class="st0"
						points="274,73 100,73 100,59.7 62.5,81.35 25,103 62.5,124.65 100,146.3 100,133 274,133 "
					/>
				</svg>

				<ul>
					<NewGame
						v-for="(item, index) in gamesinprogress[0]"
						:key="index"
						:gameinprogress="gamesinprogress[0][index]"
					/>
				</ul>
				<svg
					version="1.1"
					id="Calque_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 200 100"
					style="enable-background: new 0 0 300 200"
					xml:space="preserve"
					v-if="!isToRight"
					class="right-arrow"
					@click="toRight"
				>
					<polygon
						class="st0"
						points="274,73 100,73 100,59.7 62.5,81.35 25,103 62.5,124.65 100,146.3 100,133 274,133 "
					/>
				</svg>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script>
import Nav from '@/components/Nav.vue'
import GameDone from '@/components/GameDone.vue'
import NewGame from '@/components/NewGame.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
	name: 'Games',
	components: {
		Nav,
		GameDone,
		NewGame,
		Footer,
	},
	data() {
		return {
			isToRight: true,
			gamesdone: [],
			gamesinprogress: [],
		}
	},
	methods: {
		toLeft: function () {
			this.isToRight = false
			document.getElementById('newgames-wrapper').style.left = '50%'
			document.getElementById('newgames-wrapper').style.transform =
				'translateX(-50%)'
		},
		toRight: function () {
			this.isToRight = true
			document.getElementById('newgames-wrapper').style.left = '98%'
			document.getElementById('newgames-wrapper').style.transform =
				'translateX(0%)'
		},
	},
	created() {
		const fetchGamesDone = axios
			.get('http://localhost:3000/api/gamesdone/getAll')
			.then((res) => this.gamesdone.push(res.data))
			.catch((error) => console.log(error))
		const fetchGamesInProgress = axios
			.get('http://localhost:3000/api/gamesinprogress/getAll')
			.then((res) => this.gamesinprogress.push(res.data))
			.catch((error) => console.log(error))
	},
}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	position: relative;
	overflow-x: hidden;
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
	h1 {
		margin-bottom: 100px;
		color: $color-001;
		text-align: center;
		@include min($lg) {
			text-align: left;
		}
	}
	.newgames-wrapper {
		position: absolute;
		width: fit-content;
		width: -moz-fit-content;
		background-color: $color-001;
		display: flex;
		flex-direction: column;
		align-items: center;
		top: 150px;
		left: 98%;
		border-radius: 20px;
		z-index: 2;
		padding: 0 20px;
		box-shadow: -5px 5px 5px rgba($color: $color-002, $alpha: 0.4);
		transform: translateX(0);
		&:hover {
			box-shadow: -5px 5px 5px rgba($color: $color-002, $alpha: 1);
			> svg {
				filter: drop-shadow(-5px 5px 5px rgba($color: $color-002, $alpha: 1));
			}
		}
		h2 {
			margin: 20px 0;
		}
		> svg {
			position: absolute;
			top: 50%;
			width: 40px;
			height: 120px;
			fill: $color-001;
			filter: drop-shadow(-5px 5px 5px rgba($color: $color-002, $alpha: 0.4));
			cursor: pointer;
			@include min($sm) {
				width: 120px;
			}
		}
		.left-arrow {
			transform: translateY(-80%);
			right: 100%;
		}
		.right-arrow {
			left: 100%;
			transform: scaleX(-1) translateY(-80%);
		}
	}
}
</style>
