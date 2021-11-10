<template>
	<div class="recommandations">
		<h2>Les potos</h2>
		<ul>
			<li v-for="(item, index) in recommandation" :key="index">
				<a :href="recommandation[index].url" target="_blank">
					<div class="img-wrapper">
						<img :src="recommandation[index].src" />
					</div>
					<span>
						{{ recommandation[index].name }}
					</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Recommandations',
	data() {
		return {
			recommandation: [
				{
					name: 'Daevas Fashion',
					src: './images/image1.png',
					url: 'https://www.twitch.tv/naginatafr',
				},
				{
					name: 'Animesan1678',
					src: './images/image2.png',
					url: 'https://www.twitch.tv/daevasfashion',
				},
				{
					name: 'NaginataFR',
					src: './images/image3.png',
					url: 'https://www.twitch.tv/animesan1678',
				},
				{
					name: 'Ysallyra_',
					src: './images/image4.png',
					url: 'https://www.twitch.tv/ysallyra_',
				},
				{
					name: 'Dasheur',
					src: './images/image5.png',
					url: 'https://www.twitch.tv/dasheur',
				},
				{
					name: 'druaga300',
					src: './images/image6.png',
					url: 'https://www.twitch.tv/druaga300',
				},
				{
					name: 'vorondil_svitkona',
					src: './images/image7.png',
					url: 'https://www.twitch.tv/vorondil_svitkona',
				},
				{
					name: 'TheHumanTorchtipede',
					src: './images/image8.png',
					url: 'https://www.twitch.tv/thehumantorchtipede',
				},
			],
		}
	},
}
</script>

<style lang="scss" scoped>
.recommandations {
	margin: 150px 0 100px 0;
	ul {
		display: flex;
		flex-wrap: wrap;
		max-width: 800px;
		margin: 0 auto;
		justify-content: space-around;
		padding: 50px 20px 20px;
		border-radius: 20px;
		li a {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-family: $font-002;
			width: 180px;
			text-align: center;
			margin-bottom: 50px;
			&:hover,
			&:active,
			&:focus-within {
				.img-wrapper::before {
					background-color: $color-005;
					box-shadow: 5px 5px 5px rgba($color: $color-002, $alpha: 0.8);
				}
				span {
					background-color: $color-005;
					box-shadow: 5px 5px 5px rgba($color: $color-002, $alpha: 0.8);
				}
			}
			.img-wrapper {
				position: relative;
				z-index: 2;
				&::before {
					content: '';
					width: 100px;
					height: 100px;
					background-color: $color-004;
					position: absolute;
					border-radius: 50%;
					top: -10px;
					left: -10px;
					z-index: -1;
					transition: 0.4s;
					box-shadow: 5px 5px 5px rgba($color: $color-002, $alpha: 0.4);
				}
			}
			span {
				background-color: $color-004;
				padding: 10px 20px;
				border-radius: 20px;
				width: 100%;
				margin-top: -10px;
				color: $color-001;
				text-overflow: ellipsis;
				overflow: hidden;
				box-shadow: 5px 5px 5px rgba($color: $color-002, $alpha: 0.4);
				z-index: 2;
			}
			img {
				width: 80px;
				height: 80px;
				border-radius: 50%;
				margin-bottom: 10px;
			}
		}
	}
	h2 {
		color: $color-001;
		width: fit-content;
		width: -moz-fit-content;
		margin: 0 auto 20px;
	}
}
</style>
