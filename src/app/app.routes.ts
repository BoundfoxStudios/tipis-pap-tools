import { Routes } from '@angular/router';
import { hasCharactersGuard } from './guards/has-characters.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/characters/1/dashboard',
    },
    {
        path: 'characters',
        children: [
            {
                path: 'create',
                loadComponent: () => import('./components/characters/create-character/create-character.component'),
            },
            {
                path: ':id',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: '/characters/1/dashboard',
                    },
                    {
                        path: 'dashboard',
                        loadComponent: () => import('./components/characters/character-dashboard/character-dashboard.component'),
                        canActivate: [hasCharactersGuard],
                    },
                ],
            },
        ],
    },
    {
        path: 'tools',
        children: [
            {
                path: 'dice',
                loadComponent: () => import('./components/tools/dice/dice.component'),
            },
        ],
    },
    {
        path: 'settings',
        children: [
            {
                path: 'backup-restore',
                loadComponent: () => import('./components/settings/backup-restore/backup-restore.component'),
            },
        ],
    },
];
