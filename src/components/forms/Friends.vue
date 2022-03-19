<template>
	<div class="friends-form-wrapper">
		<form id="friendsform">
			<div class="label-wrapper">
				<label for="name">Nom</label>
				<input type="text" id="name" v-model="newName" />
			</div>
			<div class="label-wrapper">
				<label for="url">Url de la chaîne</label>
				<input type="text" id="url" v-model="newUrl" />
			</div>
			<div class="label-wrapper">
				<label for="image">Photo de profil</label>
				<input type="file" @change="onFileSelected" />
			</div>
			<button @click.prevent="addFriends">Enregistrer</button>
		</form>
		<ul class="friends">
			<li
				v-for="(item, index) in friends"
				:key="index"
				@click="deleteFriend(friends[index].name)"
			>
				{{ friends[index].name }}
				<div class="img-wrapper">
					<img :src="friends[index].image" alt="Photo de profil" />
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'FriendsForm',
	data() {
		return {
			newName: '',
			newUrl: '',
			selectedFile: null,
		}
	},
	props: {
		friends: Array,
	},
	methods: {
		onFileSelected(event) {
			this.selectedFile = event.target.files[0]
		},
		addFriends() {
			const data = new FormData()
			data.append('name', this.newName)
			data.append('url', this.newUrl)
			data.append('image', this.selectedFile, this.selectedFile.name)
			this.$emit('addFriends', data)
		},
		deleteFriend(name) {
			this.$emit('deleteFriend', name)
		},
	},
}
</script>

<style lang="scss" scoped>
.friends-form-wrapper {
	display: flex;
}
.friends {
	max-width: 800px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-left: 100px;
	li {
		width: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: 20px;
		font-family: $font-002;
		cursor: pointer;
		.img-wrapper {
			position: relative;
			height: 100px;
			width: 100px;
			border-radius: 50px;
			overflow: hidden;
			margin-top: 10px;
			&::before {
				content: 'X';
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 40px;
				color: $color-001;
				position: absolute;
				inset: 0 0 0 0;
				background-color: rgba($color: red, $alpha: 0.8);
				opacity: 0;
				transition: 0.4s;
			}
		}
		&:hover .img-wrapper::before {
			opacity: 1;
		}
		img {
			height: 100px;
			width: 100px;
		}
	}
}
#friendsform {
	.label-wrapper {
		display: flex;
		flex-direction: column;
		max-width: 400px;
		margin-bottom: 20px;
	}
}
</style>
