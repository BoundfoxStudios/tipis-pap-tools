import { inject, Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { CharacterEntity } from '../models/character/character.entity';

@Injectable({
    providedIn: 'root',
})
export class CharactersService {
    private readonly databaseService = inject(DatabaseService);

    list(): Promise<CharacterEntity[]> {
        return this.databaseService.characters.toArray();
    }

    async update(character: CharacterEntity) {
        await this.databaseService.characters.update(character.id, character);
    }

    async add(name: string): Promise<CharacterEntity> {
        const id = await this.databaseService.characters.add({
            name,
            id: 1, // prevent creating more than one character
            main: {
                agility: 0,
                magic: 0,
                spirit: 0,
                stamina: 0,
                strength: 0,
                intelligence: 0,
            },
            value: {
                life: 0,
                power: 0,
                energy: 0,
                magicDefense: 0,
                magicTolerance: 0,
                magicControl: 0,
                strike: 0,
                perception: 0,
                mana: 0,
                manaRegeneration: 0,
                reaction: 0,
                cover: 0,
                authority: 0,
            },
        });
        const character = await this.item(id);
        return character!;
    }

    private item(id: number): Promise<CharacterEntity | undefined> {
        return this.databaseService.characters.get(id);
    }
}
