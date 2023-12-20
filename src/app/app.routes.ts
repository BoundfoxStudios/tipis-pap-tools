import { Routes } from '@angular/router';
import { hasCharactersGuard } from './guards/has-characters.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/tools/dice',
    },
    {
        path: 'characters',
        children: [
            {
                path: 'create',
                loadComponent: () => import('./components/characters/create-character/create-character.component'),
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./components/characters/character-dashboard/character-dashboard.component'),
                canActivate: [hasCharactersGuard],
            },
        ],
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
