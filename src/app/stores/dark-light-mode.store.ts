import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { DarkLightModeService } from '../services/dark-light-mode.service';
import { inject } from '@angular/core';

interface DarkLightModeState {
    mode: 'dark' | 'light';
}

const storageKey = 'preferred-mode';

export const DarkLightModeStore = signalStore(
    { providedIn: 'root' },
    withState<DarkLightModeState>({ mode: 'light' }),
    withMethods(store => {
        const darkLightModeService = inject(DarkLightModeService);

        return {
            enableDarkMode: () => {
                darkLightModeService.enableDarkMode();
                patchState(store, { mode: 'dark' });
                localStorage.setItem(storageKey, 'dark');
            },
            enableLightMode: () => {
                darkLightModeService.enableLightMode();
                patchState(store, { mode: 'light' });
                localStorage.setItem(storageKey, 'light');
            },
        };
    }),
    withHooks({
        onInit: store => {
            const mode = localStorage.getItem(storageKey) ?? 'light';
            if (mode === 'light') {
                return store.enableLightMode();
            }

            return store.enableDarkMode();
        },
    }),
);
