import { signalStoreFeature, withComputed, withState } from '@ngrx/signals';
import { computed } from '@angular/core';

export type AppInitializationStatus = 'pending' | 'done';

export interface AppInitializationState {
    initializationStatus: AppInitializationStatus;
}

export const withAppInitialization = () =>
    signalStoreFeature(
        withState<AppInitializationState>({
            initializationStatus: 'pending',
        }),
        withComputed(({ initializationStatus }) => ({
            isInitialized: computed(() => initializationStatus() === 'done'),
        })),
    );
export const setAppInitialized = (): AppInitializationState => ({
    initializationStatus: 'done',
});
