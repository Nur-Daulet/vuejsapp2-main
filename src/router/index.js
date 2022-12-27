import { createRouter, createWebHistory } from 'vue-router'
import Message from '../views/Messagepopup'

const routes = [
  {
    path: '/shop/:id',
    name: 'shopvue',
    component: Message
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
