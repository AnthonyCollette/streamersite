<template>
	<div class="winner">
		<div class="name-wrapper">
			<img src="../../public/images/trophy.png" alt="Trophée" />
			<h2>{{ winner.name }}</h2>
		</div>
		<img :src="winner.image" alt="Photo du lot" />
	</div>
</template>

<script>
export default {
	name: 'Winner',
	props: {
		winner: Object,
	},
}
</script>

<style lang="scss" scoped>
.winner {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 400px;
	margin-top: 50px;
	.name-wrapper {
		display: flex;
		img {
			width: 50px;
			height: 60px;
			margin-right: 20px;
		}
	}
	h2 {
		font-size: 60px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
	}
}
</style>
