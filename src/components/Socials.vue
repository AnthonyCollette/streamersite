<template>
	<div class="socials">
		<a href="https://twitter.com/NeikkoMinou" target="_blank"
			><i class="fa-brands fa-twitter"></i
		></a>
		<a href="https://www.tiktok.com/@neikkominou" target="_blank"
			><i class="fa-brands fa-tiktok"></i
		></a>
	</div>
</template>

<script>
export default {
	name: 'Socials',
}
</script>

<style lang="scss" scoped>
.socials {
	width: fit-content;
	width: -moz-fit-content;
	margin: 0 auto;
}
a {
	color: $color-001;
	transition-duration: 0.2s;
	&:hover {
		color: $color-003;
	}
	i {
		font-size: 32px;
		margin: 10px;
	}
}
</style>
