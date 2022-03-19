<template>
	<form id="jokes">
		<textarea
			name="jokes"
			id="jokestext"
			cols="30"
			rows="10"
			v-model="BOJokes"
		></textarea>
		<input type="submit" prevent="false" @click.prevent="saveJokes(BOJokes)" />
	</form>
</template>

<script>
export default {
	name: 'JokesForm',
	props: {
		BOJokes: String,
	},
	methods: {
		saveJokes: function (BOJokes) {
			let data = {
				text: BOJokes,
			}
			this.$emit('saveJokes', data)
		},
	},
}
</script>

<style lang="scss" scoped>
form {
	display: flex;
	flex-direction: column;
	max-width: 400px;
	button {
		max-width: 100px;
		margin-top: 20px;
	}
}
</style>
