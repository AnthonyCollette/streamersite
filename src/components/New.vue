<template>
	<div class="new">
		<a :href="url" target="_blank">
			<h3>{{ title }}</h3>
			<p>{{ desc }}</p>
			<img :src="image" alt="Image de Final Fantasy XIV" />
		</a>
	</div>
</template>

<script>
export default {
	name: 'New',
	props: {
		desc: String,
		title: String,
		image: String,
		url: String,
	},
}
</script>

<style lang="scss" scoped>
.new {
	max-width: 50%;
	background-color: $color-001;
	margin: 0 auto;
	border-radius: 20px;
	margin-bottom: 50px;
	padding: 50px;
	box-shadow: 5px 5px 5px rgba($color: $color-002, $alpha: 0.4);
	&:hover {
		box-shadow: 5px 5px 5px rgba($color: $color-002, $alpha: 0.8);
	}
	img {
		width: 100%;
	}
	p {
		margin: 20px 0 50px;
	}
	a {
		color: $color-002;
	}
}
</style>
