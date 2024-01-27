import { inject, Injectable } from '@angular/core';
import { DatabaseService } from '../database.service';
import { CharacterEntity } from '../../models/character/character.entity';

@Injectable({ providedIn: 'root' })
export class CharactersTable {
    private readonly databaseService = inject(DatabaseService);

    list(): Promise<CharacterEntity[]> {
        return this.databaseService.characters.toArray();
    }

    async add(character: Omit<CharacterEntity, 'id'>) {
        const id = await this.databaseService.characters.add({
            ...character,
            id: 1, // prevent creating more than one character
        });

        const newCharacter = await this.databaseService.characters.get(id);
        return newCharacter!;
    }

    update(character: CharacterEntity) {
        return this.databaseService.characters.update(character.id, character);
    }
}
