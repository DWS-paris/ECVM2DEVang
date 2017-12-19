import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    // Charger le module de la route
    loadChildren: './components/homepage/homepage.module#HomepageModule'
  },
  {
    path: 'dashboard',
    loadChildren: './components/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'addpost',
    loadChildren: './components/addpost/addpost.module#AddpostModule'
  },
  {
    // Ajouter un paramètre à la route
    path: 'editpost/:id',
    loadChildren: './components/editpost/editpost.module#EditpostModule'
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
