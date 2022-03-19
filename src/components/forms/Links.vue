<template>
	<div class="links-wrapper">
		<form id="linksform">
			<div class="label-wrapper">
				<label for="title">Titre</label>
				<input type="text" name="title" v-model="title" />
			</div>
			<div class="label-wrapper">
				<label for="description">Description </label>
				<input type="text" name="description" v-model="description" />
			</div>
			<div class="label-wrapper">
				<label for="url">Adresse URL du lien</label>
				<input type="text" name="url" v-model="url" />
			</div>
			<button @click.prevent="saveLink">Enregistrer</button>
		</form>
		<ul>
			<li v-for="(item, index) in links" :key="index">
				<i class="fas fa-times" @click="deleteLink(item.id)"></i>
				{{ item.title }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Links',
	data() {
		return {
			title: '',
			description: '',
			url: '',
		}
	},
	props: {
		links: Array,
	},
	methods: {
		saveLink() {
			const data = new FormData()
			data.append('title', this.title)
			data.append('description', this.description)
			data.append('url', this.url)
			this.$emit('saveLink', data)
		},
		deleteLink(id) {
			this.$emit('deleteLink', id)
		},
	},
}
</script>

<style lang="scss" scoped>
.links-wrapper {
	display: flex;
	align-items: center;
	ul {
		display: flex;
		width: 800px;
		flex-wrap: wrap;
		li {
			font-family: $font-002;
		}
	}
	i {
		color: red;
		cursor: pointer;
	}
}
form {
	width: 400px;
	margin-right: 100px;
}
.label-wrapper {
	display: flex;
	flex-direction: column;
}
</style>
