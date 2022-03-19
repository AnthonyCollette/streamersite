<template>
	<div class="twitter">
		<a
			class="twitter-timeline"
			data-lang="fr"
			data-width="300"
			data-height="500"
			href="https://twitter.com/NeikkoMinou?ref_src=twsrc%5Etfw"
			>Tweets by NeikkoMinou</a
		>
		<div class="upper-twitter">
			<img
				src="../../public/images/up-arrow.png"
				alt="Flèche pointant vers le fil d'actualité Twitter"
			/>
			<p>Rejoins-moi sur Twitter !</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Twitter',
}
</script>

<style lang="scss" scoped>
.twitter {
	margin-bottom: 200px;
	position: relative;
	display: flex;
	justify-content: center;
	@include min($xxxl) {
		position: absolute;
		left: 50px;
		top: 300px;
	}
	.upper-twitter {
		position: absolute;
		bottom: 102%;
		left: 10%;
		display: flex;
		align-items: flex-start;
		transform: rotate(-10deg);
		@include min($sm) {
			left: 50%;
		}
		@include min($xxxl) {
			left: 60%;
		}
		img {
			transform: rotate(90deg) scaleY(-1);
			width: 100px;
		}
		p {
			font-family: $font-003;
			color: $color-001;
			font-size: 1.6em;
			width: 150px;
		}
	}
}
</style>
