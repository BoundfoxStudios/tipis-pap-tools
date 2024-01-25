import { patchState, signalStore, withComputed, withMethods } from '@ngrx/signals';
import { addEntity, setAllEntities, withEntities } from '@ngrx/signals/entities';
import { CharacterEntity } from '../models/character/character.entity';
import { CharacterTable } from '../services/tables/character.table';
import { computed, effect, inject, Injector } from '@angular/core';
import { setAppInitialized, withAppInitialization } from './features/with-app-initialization';

export const CharacterStore = signalStore(
    { providedIn: 'root' },
    withAppInitialization(),
    withEntities<CharacterEntity>(),
    withMethods(store => {
        const characterTable = inject(CharacterTable);

        return {
            restore: async () => {
                const characters = await characterTable.list();
                patchState(store, setAllEntities(characters), setAppInitialized());
            },
            create: async (name: string) => {
                const newCharacter = await characterTable.add(name);
                patchState(store, addEntity(newCharacter));

                return newCharacter.id;
            },
        };
    }),
    withComputed(({ ids }) => ({
        count: computed(() => ids().length),
    })),
);

export const characterStoreInitializerFactory = (injector: Injector): (() => Promise<boolean>) => {
    return async () => {
        const characterStore = injector.get(CharacterStore);
        await characterStore.restore();

        return new Promise(resolve =>
            effect(
                () => {
                    const isInitialized = characterStore.isInitialized();

                    if (isInitialized) {
                        resolve(true);
                    }
                },
                { injector },
            ),
        );
    };
};

export const characterStoreInitializerFactoryDeps = [Injector];
