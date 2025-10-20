import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', pathMatch: 'full', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)},
    {path: 'login', pathMatch: 'full', loadComponent: () => import('./pages/login/login').then(m => m.Login)}
];
