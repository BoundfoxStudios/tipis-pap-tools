import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CharacterStore } from '../stores/character.store';

export const hasCharactersGuard: CanActivateFn = () => {
    const router = inject(Router);
    const characterStore = inject(CharacterStore);
    const hasCharacters = characterStore.count() > 0;

    return hasCharacters ? true : router.createUrlTree(['/characters/create']);
};
