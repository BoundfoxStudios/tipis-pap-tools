import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dice',
    },
    {
        path: 'dice',
        loadComponent: () => import('./components/dice/dice.component'),
    },
];
