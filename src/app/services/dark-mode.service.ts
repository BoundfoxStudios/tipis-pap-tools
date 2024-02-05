import { inject, Injectable, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsTable } from './tables/settings.table';

@Injectable({
    providedIn: 'root',
})
export class DarkModeService {
    readonly isDarkMode = signal<boolean>(false);
    private readonly document = inject(DOCUMENT);
    private readonly settingsTable = inject(SettingsTable);

    async initialize(): Promise<void> {
        const settings = await this.settingsTable.latest();

        if (!settings) {
            return;
        }

        if (settings.darkMode == 'dark') {
            await this.enableDarkMode();
            this.isDarkMode.set(true);
        }
    }

    async enableDarkMode(): Promise<void> {
        this.document.body.parentElement!.classList.add('dark');
        this.document.body.parentElement!.classList.remove('light');

        this.isDarkMode.set(true);

        await this.settingsTable.update({ darkMode: 'dark' });
    }

    async enableLightMode(): Promise<void> {
        this.document.body.parentElement!.classList.add('light');
        this.document.body.parentElement!.classList.remove('dark');

        this.isDarkMode.set(false);

        await this.settingsTable.update({ darkMode: 'light' });
    }
}

export const darkModeServiceInitializerFactory = (darkModeService: DarkModeService) => async () => {
    await darkModeService.initialize();
    return true;
};

export const darkModeServiceInitializerFactoryDeps = [DarkModeService];
