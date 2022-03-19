<template>
	<Nav />
	<div class="news">
		<div class="overlay">
			<div class="container">
				<h1>News FFXIV</h1>
				<ul class="news-wrapper">
					<New
						v-for="(item, index) in news[0]"
						:key="index"
						:desc="news[0][index].description"
						:title="news[0][index].title"
						:image="news[0][index].image"
						:url="news[0][index].url"
					/>
				</ul>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script>
import axios from 'axios'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import New from '@/components/New.vue'

export default {
	name: 'News',
	components: {
		Nav,
		Footer,
		New,
	},
	data() {
		return {
			news: [],
			invocation: new XMLHttpRequest(),
			url: 'http://na.lodestonenews.com/news/topics',
			header: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET',
				'Access-Control-Allow-Headers': 'Origin, Content-Type',
			},
		}
	},
	created() {
		this.invocation.open('GET', this.url, true)
		this.invocation.setRequestHeader('Access-Control-Allow-Origin', '*')
		this.invocation.setRequestHeader('Access-Control-Allow-Methods', 'GET')
		this.invocation.setRequestHeader(
			'Access-Control-Allow-Headers',
			'Origin, Content-Type'
		)
		this.invocation.send()
		// const getNews = async () => {
		// 	await axios
		// 		.get('http://na.lodestonenews.com/news/topics', {
		// 			headers: {
		// 				'Access-Control-Allow-Origin': '*',
		// 				'Access-Control-Allow-Methods': 'GET',
		// 				'Access-Control-Allow-Headers': 'Origin, Content-Type',
		// 			},
		// 		})
		// 		.then((res) => {
		// 			this.news.push(res.data)
		// 		})
		// 		.catch((error) => console.log(error))
		// }
		// getNews()
	},
}
</script>

<style lang="scss" scoped>
.news {
	background: rgb(56, 151, 213);
	background: linear-gradient(
		90deg,
		rgba(56, 151, 213, 1) 0%,
		rgba(125, 189, 82, 1) 100%
	);

	.overlay {
		background-color: rgba($color: $color-002, $alpha: 0.2);
		padding: 100px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	h1 {
		width: fit-content;
		width: -moz-fit-content;
		margin: 0 auto 100px;
		color: $color-001;
	}
}
</style>
