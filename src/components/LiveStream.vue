<template>
	<div class="livestream">
		<div class="container">
			<img
				src="../../public/images/foot.png"
				alt="Patte de chat"
				class="foot"
			/>
			<div class="stream-wrapper">
				<iframe
					src="https://player.twitch.tv/?channel=neikkominou&parent=www.demo2.anthonycollette.fr"
					frameborder="0"
					allowfullscreen="true"
					scrolling="no"
					height="378"
					width="620"
				></iframe>
				<MarqueeText :duration="90">
					{{ jokes }}
				</MarqueeText>
			</div>
			<iframe
				id="chat_embed"
				src="https://www.twitch.tv/embed/neikkominou/chat?parent=www.demo2.anthonycollette.fr"
				height="500"
				width="350"
			></iframe>
		</div>
	</div>
</template>

<script>
import MarqueeText from 'vue-marquee-text-component'

export default {
	name: 'LiveStream',
	components: {
		MarqueeText,
	},
	props: {
		jokes: String,
	},
}
</script>

<style lang="scss" scoped>
.livestream {
	margin: 100px 0 50px;

	.stream-wrapper {
		width: fit-content !important;
		width: -moz-fit-content !important;
	}
	.container {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-wrap: wrap;
		position: relative;

		.stream-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			margin-bottom: 50px;
		}
		#chat_embed {
			margin-left: 20px;
			height: 420px;
		}
		.foot {
			position: absolute;
			left: 20%;
			top: 10%;
			transform: translateX(-50%);
			z-index: 0;
			transform: rotate(45deg);
			width: 40%;
			@include min($lg) {
				width: auto;
				top: -20%;
				left: 50%;
			}
			@include min($xl) {
				left: 80%;
			}
		}
	}
	.marquee-text-wrap {
		font-family: $font-002;
		max-width: 80vw;
		width: 500px;
		margin-top: 5px;
		background-color: $color-003;
		padding: 10px;
		box-shadow: inset 0 0 10px rgba($color: $color-002, $alpha: 1);
		color: $color-002;
		z-index: 999;
	}
	iframe {
		max-width: 80vw;
		z-index: 999;
	}
}
</style>
