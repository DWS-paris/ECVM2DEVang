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
    // Charger le module de la route
    loadChildren: './components/dashboard/dashboard.module#DashboardModule'
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
