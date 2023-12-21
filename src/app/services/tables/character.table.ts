import { DatabaseTable } from '../database.service';
import { CharacterEntity } from '../../models/character/character.entity';
import { Table } from 'dexie';
import { Injectable } from '@angular/core';

@Injectable()
export class CharacterTable implements DatabaseTable<CharacterEntity> {
    version: number = 1;
    name: string = 'characters';
    definition: string = '++id';

    private entities!: Table<CharacterEntity, number>;

    initialize(table: Table<CharacterEntity, number>): void {
        this.entities = table;
    }

    list(): Promise<CharacterEntity[]> {
        return this.entities.toArray();
    }

    item(id: number): Promise<CharacterEntity | undefined> {
        return this.entities.get(id);
    }

    async add(name: string): Promise<CharacterEntity> {
        const id = await this.entities.add({
            name,
            id: 1, // prevent creating more than one character
            agility: 0,
            magic: 0,
            spirit: 0,
            stamina: 0,
            strength: 0,
            intelligence: 0,
        });
        const character = await this.item(id);
        return character!;
    }
}
