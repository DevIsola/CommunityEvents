import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import EventDetailsView from "@/views/EventDetailsView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetailsView,
      // Lazy loading the component for performance optimization
      // component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      // Lazy loading the component for performance optimization
      // component: () => import('@/views/AboutView.vue'),
    },
  ],
})

export default router
