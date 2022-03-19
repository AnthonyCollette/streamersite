<template>
	<div class="gamesdone-wrapper">
		<form id="gamesdoneform">
			<div class="label-wrapper">
				<label for="name">Nom du jeu</label>
				<input type="text" v-model="name" />
			</div>
			<div class="label-wrapper">
				<label for="resume">Synopsis du jeu</label>
				<input type="text" v-model="resume" />
			</div>
			<div class="label-wrapper">
				<label for="avis">Avis personnel</label>
				<input type="text" v-model="avis" />
			</div>
			<div class="label-wrapper">
				<label for="note">Note</label>
				<select name="note" id="note" v-model="note">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>
			<div class="label-wrapper">
				<label for="image">Image du jeu</label>
				<input type="file" @change="onFileSelected" />
			</div>
			<button @click.prevent="addGameDone">Enregistrer</button>
		</form>
		<ul>
			<li v-for="(item, index) in gamesdone" :key="index">
				<i class="fas fa-times" @click="deleteGameDone(item.id)"></i>
				{{ item.name }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'GamesDoneForm',
	data() {
		return {
			name: '',
			resume: '',
			avis: '',
			note: 0,
			selectedFile: null,
		}
	},
	props: {
		gamesdone: Array,
	},
	methods: {
		onFileSelected(event) {
			this.selectedFile = event.target.files[0]
		},
		addGameDone() {
			const data = new FormData()
			data.append('name', this.name)
			data.append('resume', this.resume)
			data.append('avis', this.avis)
			data.append('note', this.note)
			data.append('image', this.selectedFile, this.selectedFile.name)
			this.$emit('addGameDone', data)
		},
		deleteGameDone(data) {
			this.$emit('deleteGameDone', data)
		},
	},
}
</script>

<style lang="scss" scoped>
.gamesdone-wrapper {
	display: flex;
	align-items: center;
	ul {
		margin-left: 100px;
		li {
			font-family: $font-002;
			i {
				color: red;
				cursor: pointer;
			}
		}
	}
}

#gamesdoneform {
	width: 400px;
	.label-wrapper {
		display: flex;
		flex-direction: column;
	}
	button {
		margin-top: 20px;
	}
}
</style>
