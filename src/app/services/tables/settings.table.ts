import { inject, Injectable } from '@angular/core';
import { DatabaseService } from '../database.service';
import { SettingsEntity } from '../../models/settings.entity';

@Injectable({ providedIn: 'root' })
export class SettingsTable {
    private readonly databaseService = inject(DatabaseService);

    async update(changes: SettingsEntity) {
        await this.databaseService.settings.clear();
        await this.databaseService.settings.add(changes);
    }

    latest(): Promise<SettingsEntity | undefined> {
        return this.databaseService.settings.orderBy('id').last();
    }
}
