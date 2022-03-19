<template>
	<footer>
		<p>COPYRIGHT NEIKKO ©2022</p>
		<Socials />
	</footer>
</template>

<script>
import Socials from '@/components/Socials.vue'

export default {
	name: 'Footer',
	components: {
		Socials,
	},
}
</script>

<style lang="scss" scoped>
footer {
	background-color: $color-003;
	height: 100px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: $color-001;
	position: relative;
	flex-direction: column;
	@include min($sm) {
	}
	.socials {
		@include min($sm) {
			position: absolute;
			right: 10%;
		}

		:deep a:hover {
			color: $color-006;
		}
		:deep i {
			font-size: 20px;
		}
	}
}
</style>
