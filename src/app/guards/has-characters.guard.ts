import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CharactersStore } from '../stores/characters.store';

export const hasCharactersGuard: CanActivateFn = () => {
    const router = inject(Router);
    const characterStore = inject(CharactersStore);
    const hasCharacters = characterStore.count() > 0;

    return hasCharacters ? true : router.createUrlTree(['/characters/create']);
};
