import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import 'dexie-export-import';
import { CharacterEntity } from '../models/character/character.entity';

@Injectable({
    providedIn: 'root',
})
export class DatabaseService extends Dexie {
    readonly characters!: Table<CharacterEntity, number>;

    constructor() {
        super('tipis-pap-tools');

        this.version(1).stores({
            characters: '++id',
        });
    }

    initialize(): void {
        // for later
    }

    async cleanup(): Promise<void> {
        // For later
    }

    exportToBlob(): Promise<Blob> {
        return this.export();
    }

    importFromBlob(blob: Blob): Promise<void> {
        return this.import(blob, { clearTablesBeforeImport: true });
    }
}

export const databaseInitializerFactory = (databaseService: DatabaseService) => (): Promise<void> => {
    databaseService.initialize();
    return databaseService.cleanup();
};

export const databaseInitializerFactoryDeps = [DatabaseService];
