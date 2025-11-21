import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'bateau',
    loadComponent: () => import('./pages/bateau/bateau.page').then( m => m.BateauPage)
  },
  {
    path: 'produits',
    loadComponent: () => import('./pages/produits/produits.page').then( m => m.ProduitsPage)
  },
  {
    path: 'restaurants',
    loadComponent: () => import('./pages/restaurants/restaurants.page').then( m => m.RestaurantsPage)
  },
  {
    path: 'recettes',
    loadComponent: () => import('./pages/recettes/recettes.page').then( m => m.RecettesPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then( m => m.ContactPage)
  },

];
