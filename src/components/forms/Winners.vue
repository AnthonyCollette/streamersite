<template>
	<form id="winnersform">
		<div class="label-wrapper">
			<label for="name">Nom du gagnant</label>
			<input type="text" v-model="name" />
		</div>
		<div class="label-wrapper">
			<label for="image">Image</label>
			<input type="file" @change="onFileSelected" />
		</div>
		<button @click.prevent="saveWinner">Enregistrer</button>
	</form>
</template>

<script>
export default {
	name: 'Winners',
	data() {
		return {
			name: '',
			selectedFile: null,
		}
	},
	methods: {
		onFileSelected(event) {
			this.selectedFile = event.target.files[0]
		},
		saveWinner() {
			const data = new FormData()
			data.append('name', this.name)
			data.append('image', this.selectedFile, this.selectedFile.name)
			this.$emit('saveWinner', data)
			this.name = ''
			this.selectedFile = null
		},
	},
}
</script>

<style lang="scss" scoped>
.label-wrapper {
	display: flex;
	flex-direction: column;
	width: 400px;
}
</style>
