import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersStore } from '../../../stores/characters.store';
import { filter, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { H1Component } from '../../headings/h1/h1.component';
import { CharacterStatisticComponent } from '../character-statistics/character-statistic/character-statistic.component';
import { ContentGroupComponent } from '../../content-group/content-group.component';
import { EditModeStore } from '../../../stores/edit-mode.store';
import { SecondaryH1Component } from '../../headings/secondary-h1/secondary-h1.component';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CharacterMainStatisticsComponent } from '../character-statistics/character-main-statistics/character-main-statistics.component';
import { CharacterStatisticsComponent } from '../character-statistics/character-statistics.component';

@Component({
    selector: 'pap-character-dashboard',
    standalone: true,
    imports: [
        H1Component,
        CharacterStatisticComponent,
        ContentGroupComponent,
        SecondaryH1Component,
        ReactiveFormsModule,
        CharacterMainStatisticsComponent,
        CharacterStatisticsComponent,
    ],
    templateUrl: './character-dashboard.component.html',
    styleUrl: './character-dashboard.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CharacterDashboardComponent {
    protected readonly editModeStore = inject(EditModeStore);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly characterStore = inject(CharactersStore);
    // private readonly charactersService = inject(CharactersService);
    private readonly id = toSignal(
        this.activatedRoute.paramMap.pipe(
            map(params => params.get('characterId')),
            filter(id => !!id),
            map(id => +id!),
        ),
    );
    protected readonly character = computed(() => {
        return this.characterStore.entityMap()[this.id()!];
    });

    private readonly formBuilder = inject(NonNullableFormBuilder);
    protected readonly formGroup = this.formBuilder.group({
        main: this.formBuilder.group({
            agility: [0],
            magic: [0],
            spirit: [0],
            intelligence: [0],
            stamina: [0],
            strength: [0],
        }),
        value: this.formBuilder.group({
            life: [0],
            power: [0],
            energy: [0],
            precision: [0],
            perception: [0],
            magicDefense: [0],
            magicTolerance: [0],
            magicControl: [0],
            mana: [0],
            manaRegeneration: [0],
            reaction: [0],
            cover: [0],
            authority: [0],
        }),
    });

    constructor() {
        effect(
            () => {
                const character = this.character();

                this.formGroup.reset({ main: character.main, value: character.value });
            },
            { allowSignalWrites: true },
        ); // The form internally uses a signal

        effect(() => {
            const isEditModeEnabled = this.editModeStore.isEnabled();

            if (isEditModeEnabled) {
                return;
            }

            if (this.formGroup.pristine) {
                return;
            }

            const character = this.character();

            // We might want to save the changes
            const statistics = this.formGroup.getRawValue();

            void this.characterStore.updateStatistics({ ...character, main: statistics.main, value: statistics.value });
        });
    }
}
