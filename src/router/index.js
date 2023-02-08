import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Profile from '../views/Profile.vue'
import Todo from '../views/profile/Todo.vue'
import Post from '../views/profile/Post.vue'
import Login from '../views/Login.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: Profile,
    children: [
      {
        path: 'post',
        component: Post,
      },
      {
        path: 'todo',
        component: Todo,
      },
    ],
    beforeEnter: (to, from, next) => {
      console.log('from.path', from.path)
      console.log('to.path', to.path)
      next()
      /* 
        if(loggedInn && to.path !== '/login') {
          next();
        } else {
          next('/login');
        }
      */
    },
  },
  {
    path: '/:pathMatch(.*)', //'/:catchAll(.*)'
    component: PageNotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
