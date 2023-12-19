import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/tools/dice',
    },
    {
        path: 'tools',
        children: [
            {
                path: 'dice',
                loadComponent: () => import('./components/dice/dice.component'),
            },
        ],
    },
];
