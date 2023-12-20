import { inject, Injectable } from '@angular/core';
import { CharacterTable } from './tables/character.table';

@Injectable({
    providedIn: 'root',
})
export class CharacterService {
    private readonly characterTable = inject(CharacterTable);

    async hasCharacters(): Promise<boolean> {
        const items = await this.characterTable.list();
        return items.length > 0;
    }
}
