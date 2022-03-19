<template>
	<div class="link">
		<h3>{{ link.title }}</h3>
		<p>{{ link.description }}</p>
		<a :href="link.url" target="_blank">{{ link.url }}</a>
	</div>
</template>

<script>
export default {
	name: 'Link',
	props: {
		link: Object,
	},
}
</script>

<style lang="scss" scoped>
.link {
	margin-top: 50px;
	background-color: $color-001;
	width: fit-content;
	width: -moz-fit-content;
	border-radius: 20px;
	padding: 20px 40px;
	border: 5px solid $color-006;
	max-width: 400px;
	width: 80%;
	p {
		margin: 10px 0;
	}
	a {
		font-family: $font-002;
		font-size: 20px;
		color: $color-006;
	}
}
</style>
