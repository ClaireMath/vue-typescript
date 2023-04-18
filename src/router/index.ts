import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import ArticlesListView from '../views/ArticlesListView.vue'
import WriteArticleView from '../views/WriteArticleView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'register',
      component: RegisterView
    },  
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesListView
    },
    {
      path: '/writeArticle',
      name: 'writeArticle',
      component: WriteArticleView
    },

  ]
})

export default router
