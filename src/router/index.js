import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Games from '../views/Games.vue'
import Giveaways from '../views/Giveaways.vue'
import Events from '../views/Events.vue'
import Links from '../views/Links.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import BackOffice from '../views/BackOffice.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/games',
		name: 'Games',
		component: Games,
	},
	{
		path: '/giveaways',
		name: 'Giveaways',
		component: Giveaways,
	},
	{
		path: '/events',
		name: 'Events',
		component: Events,
	},
	{
		path: '/links',
		name: 'Links',
		component: Links,
	},
	{
		path: '/news-ffxiv',
		name: 'News',
		component: News,
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/backoffice',
		name: 'BackOffice',
		component: BackOffice,
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
