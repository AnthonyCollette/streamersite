<template>
	<div class="nextgiveaways-wrapper">
		<form id="nextgiveaways">
			<div class="label-wrapper">
				<label for="date">Date</label>
				<input type="text" v-model="date" />
			</div>
			<div class="label-wrapper">
				<label for="image">Image</label>
				<input type="file" @change="onFileSelected" />
			</div>
			<button @click.prevent="addNextGiveaway">Enregistrer</button>
		</form>
		<ul>
			<li
				v-for="(item, index) in nextgiveaways"
				:key="index"
				@click="deleteNextGiveaway(item.id)"
			>
				<div class="img-wrapper">
					<img :src="item.image" alt="Lot à gagner" />
					<div class="overlay-delete"></div>
					<div class="overlay">
						<p>{{ item.date }}</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'NextGiveaways',
	data() {
		return {
			date: '',
			selectedFile: null,
		}
	},
	props: {
		nextgiveaways: Array,
	},
	methods: {
		onFileSelected(event) {
			this.selectedFile = event.target.files[0]
		},
		addNextGiveaway() {
			const data = new FormData()
			data.append('date', this.date)
			data.append('image', this.selectedFile, this.selectedFile.name)
			this.$emit('addNextGiveaway', data)
		},
		deleteNextGiveaway(id) {
			this.$emit('deleteNextGiveaway', id)
		},
	},
}
</script>

<style lang="scss" scoped>
.nextgiveaways-wrapper {
	display: flex;
	align-items: center;
	.label-wrapper {
		display: flex;
		flex-direction: column;
	}
	ul {
		max-width: 800px;
		display: flex;
		flex-wrap: wrap;
		margin-left: 100px;
		li {
			margin-left: 50px;
			width: 200px;
			height: 200px;
			overflow: hidden;
			position: relative;
			cursor: pointer;
			color: $color-001;
			&:hover {
				.overlay-delete {
					opacity: 1;
				}
			}
			.overlay {
				background-color: rgba($color: $color-002, $alpha: 0.6);
				position: absolute;
				inset: 0 0 0 0;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.overlay-delete {
				background-color: rgba($color: red, $alpha: 0.8);
				z-index: 8;
				position: absolute;
				display: flex;
				justify-content: center;
				align-items: center;
				inset: 0 0 0 0;
				opacity: 0;
				&::before {
					content: 'X';
					font-family: $font-002;
					font-size: 40px;
				}
			}
			img {
				position: absolute;
				inset: 0 0 0 0;
				z-index: -1;
				height: 100%;
			}
		}
	}
}
</style>
