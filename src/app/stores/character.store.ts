import { patchState, signalStore, withComputed, withMethods } from '@ngrx/signals';
import { addEntity, setAllEntities, updateEntity, withEntities } from '@ngrx/signals/entities';
import { CharacterEntity } from '../models/character/character.entity';
import { computed, effect, inject, Injector } from '@angular/core';
import { withAppInitialization } from './features/with-app-initialization';
import { CharactersTable } from '../services/tables/characters.table';

export const CharacterStore = signalStore(
    { providedIn: 'root' },
    withEntities<CharacterEntity>(),
    withMethods(store => {
        const charactersTable = inject(CharactersTable);

        return {
            restore: async () => {
                const characters = await charactersTable.list();
                patchState(store, setAllEntities(characters));
            },
            add: async (character: Omit<CharacterEntity, 'id'>) => {
                const newCharacter = await charactersTable.add(character);
                patchState(store, addEntity(newCharacter));

                return newCharacter;
            },
            update: async (character: CharacterEntity) => {
                await charactersTable.update(character);
                patchState(
                    store,
                    updateEntity({
                        id: character.id,
                        changes: character,
                    }),
                );
            },
        };
    }),
    withAppInitialization(),
    withComputed(({ ids }) => ({
        count: computed(() => ids().length),
    })),
);

export const characterStoreInitializerFactory = (injector: Injector): (() => Promise<boolean>) => {
    return async () => {
        const characterStore = injector.get(CharacterStore);
        await characterStore.initialize();

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
