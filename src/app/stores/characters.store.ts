import { patchState, signalStore, withComputed, withMethods } from '@ngrx/signals';
import { addEntity, setAllEntities, updateEntity, withEntities } from '@ngrx/signals/entities';
import { CharacterEntity } from '../models/character/character.entity';
import { computed, effect, inject, Injector } from '@angular/core';
import { withAppInitialization } from './features/with-app-initialization';
import { CharactersService } from '../services/characters.service';

export const CharactersStore = signalStore(
    { providedIn: 'root' },
    withEntities<CharacterEntity>(),
    withMethods(store => {
        const charactersService = inject(CharactersService);

        return {
            restore: async () => {
                const characters = await charactersService.list();
                patchState(store, setAllEntities(characters));
            },
            add: async (character: Omit<CharacterEntity, 'id' | 'value'>) => {
                const newCharacter = await charactersService.add(character);
                patchState(store, addEntity(newCharacter));

                return newCharacter;
            },
            updateStatistics: async (character: CharacterEntity) => {
                await charactersService.updateStatistics(character);
                patchState(
                    store,
                    updateEntity({
                        id: character.id,
                        changes: {
                            main: character.main,
                            value: character.value,
                        },
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

export const charactersStoreInitializerFactory = (injector: Injector): (() => Promise<boolean>) => {
    return async () => {
        const characterStore = injector.get(CharactersStore);
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

export const charactersStoreInitializerFactoryDeps = [Injector];
