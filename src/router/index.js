import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/hauling',
    name: 'Hauling',
    component: () => import('../views/HaulingView.vue')
  },
  {
    path: '/truck-repair',
    name: 'TruckRepair',
    component: () => import('../views/TruckRepairView.vue')
  },
  {
    path: '/employment',
    name: 'Employment',
    component: () => import('../views/EmploymentView.vue')
  },
  {
    path: '/employment/print-application',
    name: 'PrintApplication',
    component: () => import('../views/PrintApplicationView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
