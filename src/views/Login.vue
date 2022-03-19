<template>
	<Nav />
	<div class="login">
		<div class="container">
			<h1>Se connecter</h1>
			<form>
				<div class="wrapper">
					<label for="name">Nom</label>
					<input type="text" id="name" v-model="name" />
				</div>
				<div class="wrapper">
					<label for="password">Mot de passe</label>
					<input type="password" id="password" v-model="password" />
				</div>
				<input
					type="submit"
					class="submit"
					@click="login"
					value="Se connecter"
				/>
			</form>
		</div>
	</div>
	<Footer />
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
	name: 'Login',
	components: {
		Nav,
		Footer,
	},
	data() {
		return {
			name: '',
			password: '',
		}
	},
	methods: {
		login: function (e) {
			e.preventDefault()
			const user = {
				name: this.name,
				password: this.password,
			}

			axios
				.post('http://localhost:3000/api/auth/login', user)
				.then((res) => {
					let token = res.data.token
					localStorage.setItem('JwToken', token)
					this.$router.replace({ name: 'BackOffice' })
				})
				.catch((error) => console.log(error))
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 100px 0 200px;
	form {
		margin-top: 200px;
		font-family: $font-002;
		font-size: 20px;
		.wrapper {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			margin-top: 20px;
		}
		.submit {
			margin-top: 20px;
		}
	}
}
</style>
