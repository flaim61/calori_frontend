import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuizView from '../views/QuizView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import WeightLoss from '../views/Landings/WeightLoss.vue'
import HealthyEating from '../views/Landings/HealthyEating.vue'
import MealPrepForProductivity from '../views/Landings/MealPrepForProductivity.vue'
import FAQView from '../views/FAQView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/weight-loss',
      name: "weight-loss",
      component: WeightLoss,
    },
    {
      path: '/healthy-eating',
      name: "healthy-eating",
      component: HealthyEating,
    },
    {
      path: '/meal-prep-for-productivity',
      name: "meal-prep-for-productivity",
      component: MealPrepForProductivity,
    },
    {
      path: '/faq',
      name: "faq",
      component: FAQView,
    },
  ]
})

export default router
