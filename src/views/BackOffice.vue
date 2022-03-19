<template>
	<Nav />
	<div class="bo">
		<div class="container">
			<h1>Modifier le contenu du site</h1>
			<div class="jokes">
				<h3>Jokes</h3>
				<JokesForm @saveJokes="saveJokes" :BOJokes="BOJokes" />
				<h3>Les potos</h3>
				<FriendsForm
					@addFriends="addFriends"
					:friends="friends[0]"
					@deleteFriend="deleteFriend"
				/>
				<h3>Les jeux terminés</h3>
				<GamesDoneForm
					@addGameDone="addGameDone"
					:gamesdone="gamesdone[0]"
					@deleteGameDone="deleteGameDone"
				/>
				<h3>Les jeux à faire</h3>
				<GamesInProgress
					@addGameInProgress="addGameInProgress"
					:gamesinprogress="gamesinprogress[0]"
					@deleteGameInProgress="deleteGameInProgress"
				/>
				<h3>Prochains giveaways</h3>
				<NextGiveaways
					@addNextGiveaway="addNextGiveaway"
					:nextgiveaways="nextgiveaways[0]"
					@deleteNextGiveaway="deleteNextGiveaway"
				/>
				<h3>Gagnants des anciens giveaways</h3>
				<Winners @saveWinner="saveWinner" />
				<h3>Liens utiles</h3>
				<Links
					@saveLink="saveLink"
					:links="links[0]"
					@deleteLink="deleteLink"
				/>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script>
import axios from 'axios'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import JokesForm from '@/components/forms/Jokes.vue'
import FriendsForm from '@/components/forms/Friends.vue'
import GamesDoneForm from '@/components/forms/GamesDone.vue'
import GamesInProgress from '@/components/forms/GamesInProgress.vue'
import NextGiveaways from '@/components/forms/NextGiveaways.vue'
import Winners from '@/components/forms/Winners.vue'
import Links from '@/components/forms/Links.vue'

export default {
	name: 'BackOffice',
	components: {
		Nav,
		Footer,
		JokesForm,
		FriendsForm,
		GamesDoneForm,
		GamesInProgress,
		NextGiveaways,
		Winners,
		Links,
	},
	data() {
		return {
			BOJokes: '',
			friends: [],
			gamesdone: [],
			gamesinprogress: [],
			nextgiveaways: [],
			links: [],
		}
	},
	methods: {
		saveJokes: function (data) {
			const token = 'Bearer ' + localStorage.JwToken
			const newJoke = axios
				.post('http://localhost:3000/api/joke/create', data, {
					headers: {
						Authorization: token,
					},
				})
				.then(() => console.log('Blagues modifiées !'))
				.catch((error) => console.log(error))
		},
		addFriends: function (data) {
			const token = 'Bearer ' + localStorage.JwToken
			const newFriend = axios
				.post('http://localhost:3000/api/friend/create', data, {
					headers: {
						Authorization: token,
					},
				})
				.then(() => console.log('Ami ajouté !'))
				.catch((error) => console.log({ error }))
		},
		deleteFriend: function (data) {
			const token = 'Bearer ' + localStorage.JwToken
			const deletedFriend = axios
				.delete('http://localhost:3000/api/friend/' + data + '/delete', {
					headers: {
						Authorization: token,
					},
				})
				.then(() => console.log('Ami supprimé !'))
				.catch((error) => console.log({ error }))
		},
		addGameDone: function (data) {
			const token = 'Bearer ' + localStorage.JwToken
			const addGame = axios
				.post('http://localhost:3000/api/gamesdone/create', data, {
					headers: {
						Authorization: token,
					},
				})
				.then(() => console.log('Jeu ajouté !'))
				.catch((error) => console.log({ error }))
		},
		deleteGameDone: function (data) {
			const token = 'Bearer ' + localStorage.JwToken
			const deleteGame = axios
				.delete('http://localhost:3000/api/gamesdone/' + data + '/delete', {
					headers: {
						Authorization: token,
					},
				})
				.then(() => console.log('Jeu supprimé !'))
				.catch((error) => console.log({ error }))
		},
		addGameInProgress: function (data) {
			const token = 'Bearer ' + localStorage.JwToken
			const addGame = axios
				.post('http://localhost:3000/api/gamesinprogress/create', data, {
					headers: {
						Authorization: token,
					},
				})
				.then(() => console.log('Jeu ajouté !'))
				.catch((error) => console.log({ error }))
		},
		deleteGameInProgress: function (id) {
			const token = 'Bearer ' + localStorage.JwToken
			const deleteGame = axios
				.delete('http://localhost:3000/api/gamesinprogress/' + id + '/delete', {
					headers: {
						Authorization: token,
					},
				})
				.then(() => console.log('Jeu supprimé !'))
				.catch((error) => console.log({ error }))
		},
		addNextGiveaway: function (data) {
			const token = 'Bearer ' + localStorage.JwToken
			const addGame = axios
				.post('http://localhost:3000/api/nextgiveaway/create', data, {
					headers: {
						Authorization: token,
					},
				})
				.then(() => console.log('Jeu ajouté !'))
				.catch((error) => console.log({ error }))
		},
		deleteNextGiveaway: function (id) {
			const token = 'Bearer ' + localStorage.JwToken
			const deleteNextGiveaway = axios
				.delete('http://localhost:3000/api/nextgiveaway/' + id + '/delete', {
					headers: {
						Authorization: token,
					},
				})
				.then(() => console.log('Giveaway supprimé !'))
				.catch((error) => console.log({ error }))
		},
		saveWinner: function (data) {
			const token = 'Bearer ' + localStorage.JwToken
			const saveWinner = axios
				.post('http://localhost:3000/api/winner/create', data, {
					headers: {
						Authorization: token,
					},
				})
				.then(() => console.log('Gagnant ajouté !'))
				.catch((error) => console.log({ error }))
		},
		saveLink: function (data) {
			const token = 'Bearer ' + localStorage.JwToken
			const newLink = axios
				.post('http://localhost:3000/api/links/create', data, {
					headers: {
						Authorization: token,
					},
				})
				.then(() => console.log('Lien ajouté !'))
				.catch((error) => console.log(error))
		},
		deleteLink: function (id) {
			const token = 'Bearer ' + localStorage.JwToken
			const deleteLink = axios
				.delete('http://localhost:3000/api/links/' + id + '/delete', {
					headers: {
						Authorization: token,
					},
				})
				.then(() => console.log('Lien supprimé !'))
				.catch((error) => console.log({ error }))
		},
	},
	created() {
		const fetchJokes = axios
			.get('http://localhost:3000/api/joke/getAll')
			.then((res) => (this.BOJokes = res.data[0].text))
			.catch((error) => console.log(error))

		const fetchFriends = axios
			.get('http://localhost:3000/api/friend/getAll')
			.then((res) => this.friends.push(res.data))
			.catch((error) => console.log(error))

		const fetchGamesDone = axios
			.get('http://localhost:3000/api/gamesdone/getAll')
			.then((res) => this.gamesdone.push(res.data))
			.catch((error) => console.log(error))

		const fetchGamesInProgress = axios
			.get('http://localhost:3000/api/gamesinprogress/getAll')
			.then((res) => this.gamesinprogress.push(res.data))
			.catch((error) => console.log(error))

		const fetchNextGiveaways = axios
			.get('http://localhost:3000/api/nextgiveaway/getAll')
			.then((res) => this.nextgiveaways.push(res.data))
			.catch((error) => console.log(error))

		const fetchLinks = axios
			.get('http://localhost:3000/api/links/getAll')
			.then((res) => this.links.push(res.data))
			.catch((error) => console.log(error))
	},
}
</script>

<style lang="scss" scoped>
.bo {
	h1 {
		letter-spacing: 0;
		width: fit-content;
		width: -moz-fit-content;
		margin: 100px auto;
	}
	h3 {
		margin: 20px 0;
	}
}
</style>
