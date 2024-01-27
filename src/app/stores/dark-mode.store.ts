import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { effect, inject, Injector } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';
import { SettingsTable } from '../services/tables/settings.table';
import { withAppInitialization } from './features/with-app-initialization';

interface DarkModeState {
    mode: 'dark' | 'light';
}

export const DarkModeStore = signalStore(
    { providedIn: 'root' },
    withState<DarkModeState>({ mode: 'light' }),
    withMethods(store => {
        const darkModeService = inject(DarkModeService);
        const settingsTable = inject(SettingsTable);

        const enableDarkMode = () => {
            patchState(store, { mode: 'dark' });

            darkModeService.enableDarkMode();
        };

        const enableLightMode = () => {
            patchState(store, { mode: 'light' });

            darkModeService.enableLightMode();
        };

        return {
            restore: async () => {
                const settings = await settingsTable.latest();

                if (settings?.darkMode === 'dark') {
                    enableDarkMode();
                }
            },
            enableDarkMode: async () => {
                enableDarkMode();
                await settingsTable.update({ darkMode: 'dark' });
            },
            enableLightMode: async () => {
                enableLightMode();
                await settingsTable.update({ darkMode: 'light' });
            },
        };
    }),
    withAppInitialization(),
);

export const darkModeStoreInitializerFactory = (injector: Injector): (() => Promise<boolean>) => {
    return async () => {
        const store = injector.get(DarkModeStore);
        await store.initialize();

        return new Promise(resolve =>
            effect(
                () => {
                    const isInitialized = store.isInitialized();

                    if (isInitialized) {
                        resolve(true);
                    }
                },
                { injector },
            ),
        );
    };
};
