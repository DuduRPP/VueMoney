import LoginView from '@/views/LoginView.vue'
import MainView from '@/views/MainView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: MainView, meta: { requiresAuth: true } },
  { path: '/login/', component: LoginView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject,
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
