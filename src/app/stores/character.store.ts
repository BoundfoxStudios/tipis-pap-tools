import { patchState, signalStore, withComputed, withMethods } from '@ngrx/signals';
import { addEntity, setAllEntities, updateEntity, withEntities } from '@ngrx/signals/entities';
import { CharacterEntity } from '../models/character/character.entity';
import { computed, effect, inject, Injector } from '@angular/core';
import { setAppInitialized, withAppInitialization } from './features/with-app-initialization';
import { CharactersService } from '../services/characters.service';

export const CharacterStore = signalStore(
    { providedIn: 'root' },
    withAppInitialization(),
    withEntities<CharacterEntity>(),
    withMethods(store => {
        const charactersService = inject(CharactersService);

        return {
            restore: async () => {
                const characters = await charactersService.list();
                patchState(store, setAllEntities(characters), setAppInitialized());
            },
            create: async (name: string) => {
                const newCharacter = await charactersService.add(name);
                patchState(store, addEntity(newCharacter));

                return newCharacter.id;
            },
            update: async (character: CharacterEntity) => {
                await charactersService.update(character);
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
