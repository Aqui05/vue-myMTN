// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import BusinessContent from '@/components/pages/BusinessContent.vue'
import ConsommationContent from '@/components/pages/ConsommationContent.vue'
import ForfaitContent from '@/components/pages/ForfaitContent.vue'
import ProfilContent from '@/components/pages/ProfilContent.vue'
import SimContent from '@/components/pages/SimContent.vue'
import HomeComponent from '@/components/HomeComponent.vue'
import MainContent from '@/components/pages/MainContent.vue'
import SearchComponent from '@/components/pages/SearchComponent.vue'

const routes = [
  //principal
  {
    path: '/',
    name: 'home',
    component: HomeComponent,
    children: [
      {
        path: '/accueil',
        name: 'accueil',
        component: MainContent,
      },
      {
        path: '/business',
        name: 'business',
        component: BusinessContent,
      },
      {
        path: '/sim',
        name: 'sim',
        component: SimContent,
      },
      {
        path: '/consommation',
        name: 'consommation',
        component: ConsommationContent,
      },
    
      {
        path: '/forfaits-services',
        name: 'forfait',
        component: ForfaitContent,
      },
    
      {
        path: '/profil',
        name: 'profil',
        component: ProfilContent,
      },
      { path: '/', redirect: '/accueil', },
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: SearchComponent,
  }  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
