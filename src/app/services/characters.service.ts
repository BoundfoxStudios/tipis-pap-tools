import { inject, Injectable } from '@angular/core';
import { CharacterEntity } from '../models/character/character.entity';
import { CharactersStore } from '../stores/characters.store';

@Injectable({
    providedIn: 'root',
})
export class CharactersService {
    private readonly charactersStore = inject(CharactersStore);

    async update(character: CharacterEntity) {
        await this.charactersStore.update(character);
    }

    async add(name: string, gender: string, age: number, nation: string, religion: string): Promise<CharacterEntity> {
        return this.charactersStore.add({
            name,
            gender,
            age,
            nation,
            religion,
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
    }
}
