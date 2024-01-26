import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { computed } from '@angular/core';

interface EditModeState {
    mode: 'read' | 'write';
}

export const EditModeStore = signalStore(
    { providedIn: 'root' },
    withState<EditModeState>({ mode: 'read' }),
    withMethods(store => {
        return {
            enableEditMode: () => {
                patchState(store, { mode: 'write' });
            },
            disableEditMode: () => {
                patchState(store, { mode: 'read' });
            },
        };
    }),
    withComputed(store => ({
        isEnabled: computed(() => store.mode() === 'write'),
    })),
);
