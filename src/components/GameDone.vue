<template>
	<div class="gamedone">
		<div class="banner" @click="this.display = !this.display">
			<img :src="gamesdone.image" alt="Image du jeu" />
			<div class="overlay">
				<h2>{{ gamesdone.name }}</h2>
			</div>
		</div>
		<div class="text-wrapper" v-if="display">
			<h3>Synopsis</h3>
			<p>
				{{ gamesdone.resume }}
			</p>
			<h3>Mon avis</h3>
			<p>
				{{ gamesdone.avis }}
			</p>
			<div class="notes">
				<img
					src="../../public/images/favourites.png"
					alt="Etoile"
					class="note"
					v-for="(note, index) in gamesdone.note"
					:key="index"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GameDone',
	props: {
		gamesdone: Object,
	},
	data() {
		return {
			display: false,
		}
	},
}
</script>

<style lang="scss" scoped>
.gamedone {
	width: 80vw;
	max-width: 600px;
	.banner {
		cursor: pointer;
		position: relative;
		width: 100%;
		color: $color-001;
		font-family: $font-002;
		border-radius: 20px;
		font-size: 20px;
		overflow: hidden;
		margin: 20px 0;
		height: 70px;
		z-index: 2;
		box-shadow: inset 5px 5px rgba($color: $color-002, $alpha: 0.4);
		img {
			width: 100%;
			z-index: -1;
		}
		.overlay {
			position: absolute;
			inset: 0 0 0 0;
			background-color: rgba($color: $color-002, $alpha: 0.2);
			display: flex;
			justify-content: center;
			align-items: center;
		}
		h2 {
			font-size: 40px;
			font-family: $font-002;
			letter-spacing: 0;
		}
	}
	p {
		font-family: $font-002;
		font-size: 20px;
		margin: 10px 0 20px;
	}
	.notes {
		display: flex;
	}
	.note {
		width: 25px;
	}
	.text-wrapper {
		background-color: rgba($color: $color-001, $alpha: 0.4);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		margin: 0 auto;
		padding: 20px;
		@include min($sm) {
			width: 80%;
			padding: 30px 50px;
		}
	}
}
</style>
