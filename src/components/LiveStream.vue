<template>
	<div class="livestream">
		<div class="container">
			<div class="stream-wrapper">
				<iframe
					src="https://player.twitch.tv/?channel=neikkominou&parent=www.demo2.anthonycollette.fr"
					frameborder="0"
					allowfullscreen="true"
					scrolling="no"
					height="378"
					width="620"
				></iframe>
				<MarqueeText>
					Lylianna a un énorme chibrax, et tout le monde l'aime ! Neikko, quant
					à lui, en a une toute petite !
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
		.stream-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
		}
		#chat_embed {
			margin-left: 20px;
			height: 420px;
		}
	}
	.marquee-text-wrap {
		font-family: $font-002;
		width: 500px;
		margin-top: 5px;
		background-color: $color-003;
		padding: 10px;
		box-shadow: inset 0 0 10px rgba($color: $color-002, $alpha: 1);
		color: $color-002;
	}
}
</style>
