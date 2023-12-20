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
}
