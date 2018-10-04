import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Artists from './components/Artists.vue'
import RegisterArtist from './components/RegisterArtist.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/artists',
        name: 'artists',
        component: Artists
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterArtist
    }
  ]
})
