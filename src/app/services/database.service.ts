import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import 'dexie-export-import';
import { CharacterEntity } from '../models/character/character.entity';
import { SettingsEntity } from '../models/settings.entity';

@Injectable({
    providedIn: 'root',
})
export class DatabaseService extends Dexie {
    readonly characters!: Table<CharacterEntity, number>;
    readonly settings!: Table<SettingsEntity, number>;

    constructor() {
        super('tipis-pap-tools');

        this.version(1).stores({
            characters: '++id',
        });
        this.version(2).stores({
            settings: '++id',
        });
    }

    initialize(): void {
        // For later
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
