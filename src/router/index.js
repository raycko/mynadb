import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'history', // Allows using html5 history features
  hashbang: false, // Removes the hashbang from the url
  linkActiveClass: 'active',
  routes,
})

export default router
