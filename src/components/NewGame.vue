<template>
	<div class="newgame">
		<div class="banner">
			<img :src="gameinprogress.image" alt="Image du jeu" />
			<div class="overlay">
				<h2>{{ gameinprogress.name }}</h2>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NewGame',
	props: {
		gameinprogress: Object,
	},
}
</script>

<style lang="scss" scoped>
.newgame {
	.banner {
		cursor: pointer;
		position: relative;
		max-width: 60vw;
		width: 600px;
		color: $color-001;
		font-family: $font-002;
		border-radius: 20px;
		font-size: 20px;
		overflow: hidden;
		margin: 20px 0;
		height: 70px;
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
}
</style>
