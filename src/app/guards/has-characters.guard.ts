import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CharacterService } from '../services/character.service';

export const hasCharactersGuard: CanActivateFn = async () => {
    const router = inject(Router);
    const characterService = inject(CharacterService);
    const hasCharacters = await characterService.hasCharacters();

    return hasCharacters ? true : router.createUrlTree(['/characters/create']);
};
