<template>
	<div class="gamesinprogress-wrapper">
		<form id="gamesinprogress">
			<div class="label-wrapper">
				<label for="name">Nom du jeu</label>
				<input type="text" v-model="name" />
			</div>
			<div class="label-wrapper">
				<label for="image">Image du jeu</label>
				<input type="file" @change="onFileSelected" />
			</div>
			<button @click.prevent="addGameInProgress">Enregistrer</button>
		</form>
		<ul class="gip-list">
			<li
				v-for="(game, index) in gamesinprogress"
				:key="index"
				@click="deleteGameInProgress(game.id)"
			>
				<div class="img-wrapper">
					<div class="overlay">
						<div class="delete-overlay"></div>
						<img :src="game.image" alt="Image du jeu" />
						<p>{{ game.name }}</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'GamesInProgress',
	data() {
		return {
			name: '',
			selectedFile: null,
		}
	},
	props: {
		gamesinprogress: Array,
	},
	methods: {
		onFileSelected(event) {
			this.selectedFile = event.target.files[0]
		},
		addGameInProgress() {
			const data = new FormData()
			data.append('name', this.name)
			data.append('image', this.selectedFile, this.selectedFile.name)
			this.$emit('addGameInProgress', data)
		},
		deleteGameInProgress(id) {
			this.$emit('deleteGameInProgress', id)
		},
	},
}
</script>

<style lang="scss" scoped>
.gamesinprogress-wrapper {
	display: flex;
	.label-wrapper {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
	}
	button {
		margin-top: 10px;
	}
	ul {
		display: flex;
		max-width: 800px;
		flex-wrap: wrap;
		margin-left: 100px;
		li {
			width: 200px;
			margin-left: 50px;
			cursor: pointer;
			.delete-overlay {
				position: absolute;
				inset: 0 0 0 0;
				background-color: rgba($color: red, $alpha: 0.8);
				opacity: 0;
				transition: 0.4s;
				&::before {
					content: 'X';
					position: absolute;
					inset: 0 0 0 0;
					color: $color-001;
					display: flex;
					justify-content: center;
					align-items: center;
					font-family: $font-002;
					font-size: 40px;
				}
			}
			&:hover {
				.delete-overlay {
					opacity: 1;
				}
			}
			.img-wrapper {
				position: relative;
				border-radius: 20px;
				overflow: hidden;
				height: 100px;
				width: 200px;
			}
			.overlay {
				position: absolute;
				inset: 0 0 0 0;
				background-color: rgba($color: $color-002, $alpha: 0.6);
				display: flex;
				justify-content: center;
				align-items: center;
			}
			p {
				color: $color-001;
			}
			img {
				position: absolute;
				inset: 0 0 0 0;
				width: 100%;
				height: 100%;
				z-index: -1;
			}
		}
	}
}
</style>
