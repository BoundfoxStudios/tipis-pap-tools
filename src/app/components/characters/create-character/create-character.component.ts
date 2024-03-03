import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { H1Component } from '../../headings/h1/h1.component';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextInputComponent } from '../../inputs/text-input/text-input.component';
import { SubmitButtonComponent } from '../../inputs/submit-button/submit-button.component';
import { Router, RouterLink } from '@angular/router';
import { CharactersService } from '../../../services/characters.service';
import { CharacterStatisticComponent } from '../character-statistic/character-statistic.component';
import { ContentGroupComponent } from '../../content-group/content-group.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { requiredPointsToDistributeValidator } from '../../../validators/required-points-to-distribute-validator';
import { CharactersStore } from '../../../stores/characters.store';

const INITIAL_POINTS_TO_DISTRIBUTE = 200;

@Component({
    selector: 'pap-create-character',
    standalone: true,
    imports: [
        H1Component,
        TextInputComponent,
        SubmitButtonComponent,
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
        CharacterStatisticComponent,
        ContentGroupComponent,
    ],
    templateUrl: './create-character.component.html',
    styleUrl: './create-character.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreateCharacterComponent {
    protected readonly charactersService = inject(CharactersService);
    protected readonly charactersStore = inject(CharactersStore);
    private readonly formBuilder = inject(NonNullableFormBuilder);
    protected readonly formGroup = this.formBuilder.group({
        name: ['', Validators.required],
        nation: ['', Validators.required],
        gender: ['', Validators.required],
        age: [0, [Validators.required, Validators.min(0)]],
        religion: ['', Validators.required],
        group: ['', Validators.required],
        main: this.formBuilder.group(
            {
                agility: [0],
                magic: [0],
                spirit: [0],
                intelligence: [0],
                stamina: [0],
                strength: [0],
            },
            {
                validators: [requiredPointsToDistributeValidator(this.charactersService, INITIAL_POINTS_TO_DISTRIBUTE)],
            },
        ),
    });
    private readonly pointsChange = toSignal(
        this.formGroup.controls['main'].valueChanges.pipe(map(() => this.formGroup.controls['main'].getRawValue())),
    );

    protected readonly remainingPoints = computed(() => {
        const distributedPoints = this.pointsChange();

        if (!distributedPoints) {
            return INITIAL_POINTS_TO_DISTRIBUTE;
        }

        return INITIAL_POINTS_TO_DISTRIBUTE - this.charactersService.sumMainStatistics(distributedPoints);
    });
    private readonly router = inject(Router);

    protected async submit(): Promise<void> {
        if (this.formGroup.invalid) {
            return;
        }

        const character = await this.charactersStore.add(this.formGroup.getRawValue());

        await this.router.navigate(['/characters', character.id, 'dashboard']);
    }
}
