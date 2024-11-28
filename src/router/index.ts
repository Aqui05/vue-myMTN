import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import BusinessContent from '@/components/pages/BusinessContent.vue'
import ConsommationContent from '@/components/pages/ConsommationContent.vue'
import ForfaitContent from '@/components/pages/ForfaitContent.vue'
import ProfilContent from '@/components/pages/ProfilContent.vue'
import SimContent from '@/components/pages/SimContent.vue'
import HomeComponent from '@/components/HomeComponent.vue'
import MainContent from '@/components/pages/MainContent.vue'
import SearchComponent from '@/components/pages/SearchComponent.vue'

// Extension des meta fields pour ajouter le type de titre
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent,
    meta: { title: 'MyMTN Web' },
    children: [
      {
        path: '/accueil',
        name: 'accueil',
        component: MainContent,
        meta: { title: 'Mon compte | MyMTN Web' },
      },
      {
        path: '/business',
        name: 'business',
        component: BusinessContent,
        meta: { title: 'MTN Business | MyMTN Web' },
      },
      {
        path: '/sim',
        name: 'sim',
        component: SimContent,
        meta: { title: 'Gérer ma carte SIM | MyMTN Web' },
      },
      {
        path: '/consommation',
        name: 'consommation',
        component: ConsommationContent,
        meta: { title: 'Ma Consommation | MyMTN Web' },
      },
      {
        path: '/forfaits-services',
        name: 'forfait',
        component: ForfaitContent,
        meta: { title: 'Forfaits & Services | MyMTN Web' },
      },
      {
        path: '/profil',
        name: 'profil',
        component: ProfilContent,
        meta: { title: 'Mon Profil' },
      },
      { 
        path: '/', 
        redirect: '/accueil', 
      },
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: SearchComponent,
    meta: { title: 'Recherche' },
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Middleware de navigation pour mettre à jour le titre de la page
router.beforeEach((to, from, next) => {
  // Utiliser le titre de la route ou un titre par défaut
  const pageTitle = to.meta.title || 'MTN';
  document.title = pageTitle;
  next();
})

export default router