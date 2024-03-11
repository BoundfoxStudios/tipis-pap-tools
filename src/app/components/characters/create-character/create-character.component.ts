import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { H1Component } from '../../headings/h1/h1.component';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextInputComponent } from '../../inputs/text-input/text-input.component';
import { ButtonComponent } from '../../buttons/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { CharactersService } from '../../../services/characters.service';
import { CharacterStatisticComponent } from '../character-statistics/character-statistic/character-statistic.component';
import { ContentGroupComponent } from '../../content-group/content-group.component';
import { requiredPointsToDistributeValidator } from '../../../validators/required-points-to-distribute-validator';
import { CharactersStore } from '../../../stores/characters.store';
import { CharacterMainStatisticsComponent } from '../character-statistics/character-main-statistics/character-main-statistics.component';
import { CharacterStatisticsComponent } from '../character-statistics/character-statistics.component';

const INITIAL_POINTS_TO_DISTRIBUTE = 200;

@Component({
    selector: 'pap-create-character',
    standalone: true,
    imports: [
        H1Component,
        TextInputComponent,
        ButtonComponent,
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
        CharacterStatisticComponent,
        ContentGroupComponent,
        CharacterMainStatisticsComponent,
        CharacterStatisticsComponent,
    ],
    templateUrl: './create-character.component.html',
    styleUrl: './create-character.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreateCharacterComponent {
    protected readonly charactersService = inject(CharactersService);
    protected readonly charactersStore = inject(CharactersStore);
    private readonly formBuilder = inject(NonNullableFormBuilder);
    protected readonly formGroup = this.formBuilder.group(
        {
            name: ['', Validators.required],
            nation: ['', Validators.required],
            gender: ['', Validators.required],
            age: [0, [Validators.required, Validators.min(0)]],
            religion: ['', Validators.required],
            group: ['', Validators.required],
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
                magicDefense: [0],
                magicTolerance: [0],
                magicControl: [0],
                precision: [0],
                perception: [0],
                mana: [0],
                manaRegeneration: [0],
                reaction: [0],
                cover: [0],
                authority: [0],
            }),
        },
        {
            validators: requiredPointsToDistributeValidator(this.charactersService, INITIAL_POINTS_TO_DISTRIBUTE),
        },
    );

    private readonly router = inject(Router);

    protected async submit(): Promise<void> {
        if (this.formGroup.invalid) {
            return;
        }

        const character = await this.charactersStore.add(this.formGroup.getRawValue());

        await this.router.navigate(['/characters', character.id, 'dashboard']);
    }
}
