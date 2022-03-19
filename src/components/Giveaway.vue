<template>
	<div class="giveaway">
		<p>{{ nextgiveaways.date }}</p>
		<img :src="nextgiveaways.image" alt="Lot à gagner" />
	</div>
</template>

<script>
export default {
	name: 'Giveaway',
	props: {
		nextgiveaways: Object,
	},
}
</script>

<style lang="scss" scoped>
.giveaway {
	width: 500px;
	margin: 50px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		max-width: 80vw;
	}
}
</style>
