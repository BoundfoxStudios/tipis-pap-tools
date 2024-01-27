import { patchState, signalStoreFeature, type, withComputed, withMethods, withState } from '@ngrx/signals';
import { computed, Injector } from '@angular/core';

export type AppInitializationStatus = 'pending' | 'done';

export interface AppInitializationState {
    initializationStatus: AppInitializationStatus;
}

export const withAppInitialization = () =>
    signalStoreFeature(
        {
            methods: type<{
                restore: () => Promise<void>;
            }>(),
        },
        withState<AppInitializationState>({
            initializationStatus: 'pending',
        }),
        withComputed(({ initializationStatus }) => ({
            isInitialized: computed(() => initializationStatus() === 'done'),
        })),
        withMethods(store => {
            return {
                initialize: async () => {
                    await store.restore();
                    patchState(store, setAppInitialized());
                },
            };
        }),
    );
export const setAppInitialized = (): AppInitializationState => ({
    initializationStatus: 'done',
});

// export const storeInitializerFactory = <T extends StoreWithAppInitializationFeature>(storeType: T) => {
//     return (injector: Injector): (() => Promise<boolean>) => {
//         return async () => {
//             const store = injector.get(storeType);
//             await store.initialize();
//
//             return new Promise(resolve =>
//                 effect(
//                     () => {
//                         const isInitialized = store.isInitialized();
//
//                         if (isInitialized) {
//                             resolve(true);
//                         }
//                     },
//                     { injector },
//                 ),
//             );
//         };
//     };
// };
//
export const storeInitializerFactoryDeps = [Injector];
