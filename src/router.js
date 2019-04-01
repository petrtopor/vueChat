import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ChatView from './views/ChatView.vue'
import LoginForm from './components/LoginForm.vue'
import ConfirmForm from './components/ConfirmForm.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,

      children: [
        {
          path: '/',
          component: LoginForm
        },
        {
          path: 'confirmcode',
          component: ConfirmForm,
          props: route => ({ phoneNumber: route.query.phonenumber })
        }
      ]
    },
    {
      path: "/chat",
      name: "ChatView",
      component: ChatView
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
        // import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
