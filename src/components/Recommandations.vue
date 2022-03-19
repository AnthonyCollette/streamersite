<template>
	<div class="recommandations">
		<h2>Les potos</h2>
		<ul>
			<li v-for="(item, index) in friends" :key="index">
				<a :href="friends[index].url" target="_blank">
					<div class="img-wrapper">
						<img :src="friends[index].image" />
					</div>
					<span>
						{{ friends[index].name }}
					</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Recommandations',
	props: {
		friends: Array,
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
