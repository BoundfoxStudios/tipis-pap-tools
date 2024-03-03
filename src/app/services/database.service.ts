import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import 'dexie-export-import';
import { CharacterEntity } from '../models/character/character.entity';
import { SettingsEntity } from '../models/settings.entity';
import { TransactionEntity } from '../models/character/transaction.entity';

@Injectable({
    providedIn: 'root',
})
export class DatabaseService extends Dexie {
    readonly characters!: Table<CharacterEntity, number>;
    readonly settings!: Table<SettingsEntity, number>;
    readonly transactions!: Table<TransactionEntity<unknown>, number>;

    constructor() {
        super('tipis-pap-tools');

        this.version(1).stores({
            characters: '++id',
        });

        this.version(2).stores({
            settings: '++id',
        });

        this.version(3).stores({
            transactions: '++id,characterId,timestamp',
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

    async importFromBlob(blob: Blob): Promise<boolean> {
        try {
            await this.import(blob, { clearTablesBeforeImport: true });
        } catch {
            return false;
        }

        return true;
    }

    async clear(): Promise<void> {
        await this.delete();
    }
}

export const databaseInitializerFactory = (databaseService: DatabaseService) => (): Promise<void> => {
    databaseService.initialize();
    return databaseService.cleanup();
};

export const databaseInitializerFactoryDeps = [DatabaseService];
