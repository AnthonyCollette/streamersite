<template>
	<Nav />
	<div class="contact">
		<div class="container">
			<h1>Contactez-nous !</h1>
			<div class="forms">
				<div class="neikko form-wrapper">
					<a href="mailto:philippe88vdv@gmail.com" target="_blank"
						>Contacter Neikko</a
					>
					<h4>Le streamer</h4>
				</div>
				<div class="elendielle form-wrapper">
					<a href="mailto:cyriuscreations@gmail.com" target="_blank"
						>Contacter Elendielle</a
					>
					<h4>La créatrice</h4>
				</div>
				<div class="youma form-wrapper">
					<a href="mailto:contactpro@anthonycollette.fr" target="_blank"
						>Contacter Youma</a
					>
					<h4>Le développeur</h4>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'Contact',
	components: {
		Nav,
		Footer,
	},
}
</script>

<style lang="scss" scoped>
.contact {
	.container {
		padding: 100px 0 200px;
		h1 {
			width: fit-content;
			width: -moz-fit-content;
			margin: 0 auto 100px;
		}
		.forms {
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-direction: column;
			@include min($lg) {
				flex-direction: row;
				align-items: flex-start;
			}
		}
		a {
			font-family: $font-002;
			font-size: 20px;
			background-color: $color-003;
			border: 2px solid $color-003;
			padding: 10px 20px;
			border-radius: 20px;
			color: $color-001;
			transition: 0.4s;
			cursor: pointer;
			&:hover {
				background: $color-001;
				color: $color-003;
			}
		}
		.label-wrapper {
			display: flex;
			flex-direction: column;
		}
		form {
			font-family: $font-002;
			font-size: 18px;
			margin-top: 50px;
			display: flex;
			flex-direction: column;
			align-items: center;

			label {
				margin-top: 10px;
			}
			input,
			textarea {
				font-family: $font-002;
				font-size: 18px;
				border: solid 2px $color-005;
				border-radius: 10px;
				padding: 5px 10px;
				margin: 5px 0;
			}
			.submit {
				margin-top: 20px;
				cursor: pointer;
				background-color: $color-005;
				border: 2px solid $color-005;
				color: $color-001;
				padding: 10px 20px;
				&:hover {
					background-color: $color-001;
					color: $color-005;
				}
			}
		}
		.form-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 50px;
			@include min($lg) {
				margin-top: 0;
			}
		}
	}
	h4 {
		margin-top: 10px;
	}
}
</style>
