import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CharacterMainStatisticsComponent } from './character-main-statistics/character-main-statistics.component';
import { CharacterStatisticComponent } from './character-statistic/character-statistic.component';
import { ContentGroupComponent } from '../../content-group/content-group.component';
import { CharacterValueStatisticsComponent } from './character-value-statistics/character-value-statistics.component';
import { CharactersService } from '../../../services/characters.service';
import { map, Subscription } from 'rxjs';
import { MainStatistics } from '../../../models/character/main-statistics';
import { ValueStatistics } from '../../../models/character/value-statistics';
import { JsonPipe } from '@angular/common';
import { ButtonComponent } from '../../buttons/button/button.component';

@Component({
    selector: 'pap-character-statistics',
    standalone: true,
    imports: [
        CharacterMainStatisticsComponent,
        CharacterStatisticComponent,
        ContentGroupComponent,
        ReactiveFormsModule,
        CharacterValueStatisticsComponent,
        JsonPipe,
        ButtonComponent,
    ],
    templateUrl: './character-statistics.component.html',
    styleUrl: './character-statistics.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterStatisticsComponent {
    pointsToDistribute = input(0);
    mainFormGroup = input.required<FormGroup>();
    mainAllowEdit = input(false);
    valueFormGroup = input.required<FormGroup>();
    valueAllowEdit = input(false);

    mainStatistics = input<MainStatistics>({
        strength: 0,
        stamina: 0,
        intelligence: 0,
        magic: 0,
        spirit: 0,
        agility: 0,
    });

    valueStatistics = input<ValueStatistics>({
        precision: 0,
        manaRegeneration: 0,
        magicTolerance: 0,
        magicControl: 0,
        authority: 0,
        magicDefense: 0,
        perception: 0,
        cover: 0,
        reaction: 0,
        energy: 0,
        mana: 0,
        power: 0,
        life: 0,
    });

    convertedMainPoints = signal(0);
    valuePointsToDistribute = signal(0);
    protected readonly canConvertToValuePoints = computed(() => this.mainRemainingPoints() >= 1);
    protected readonly canConverToMainPoint = computed(() => this.valueRemainingPoints() >= 3);
    private readonly mainStatisticsChange = signal<MainStatistics>({
        agility: 0,
        spirit: 0,
        magic: 0,
        intelligence: 0,
        stamina: 0,
        strength: 0,
    });

    private readonly valueStatisticsChange = signal<ValueStatistics>({
        life: 0,
        power: 0,
        mana: 0,
        energy: 0,
        reaction: 0,
        cover: 0,
        perception: 0,
        magicDefense: 0,
        authority: 0,
        magicControl: 0,
        magicTolerance: 0,
        manaRegeneration: 0,
        precision: 0,
    });
    private readonly charactersService = inject(CharactersService);
    protected readonly mainRemainingPoints = computed(() => {
        const mainStatisticsChange = this.mainStatisticsChange();

        const initialPoints = this.charactersService.sumMainStatistics(this.mainStatistics());
        const mainDistributedPoints = this.charactersService.sumMainStatistics(mainStatisticsChange);

        return this.pointsToDistribute() - (mainDistributedPoints - initialPoints) - this.convertedMainPoints();
    });
    protected readonly valueRemainingPoints = computed(() => {
        const valueStatisticsChange = this.valueStatisticsChange();

        const initialPoints = this.charactersService.sumValueStatistics(this.valueStatistics());
        const valueDistributedPoints = this.charactersService.sumValueStatistics(valueStatisticsChange);

        return this.valuePointsToDistribute() - valueDistributedPoints - initialPoints;
    });
    protected readonly calculatedValueStatistics = computed(() => {
        const mainStatistics = this.mainStatisticsChange();
        const valueStatistics = this.valueStatisticsChange();

        return this.charactersService.calculateValueStatistics({ main: mainStatistics, value: valueStatistics });
    });

    constructor() {
        this.subscribeToMainFormGroupChanges();
        this.subscribeToValueFormGroupChanges();
    }

    protected convertMainToValuePoint(): void {
        const remainingMainPoints = this.mainRemainingPoints();

        if (remainingMainPoints >= 1) {
            this.convertedMainPoints.update(current => current + 1);
            this.valuePointsToDistribute.update(current => current + 3);
        }
    }

    protected convertValueToMainPoint(): void {
        const remainingValuePoints = this.valueRemainingPoints();

        if (remainingValuePoints >= 3) {
            this.convertedMainPoints.update(current => current - 1);
            this.valuePointsToDistribute.update(current => current - 3);
        }
    }

    private subscribeToMainFormGroupChanges(): void {
        let subscription: Subscription | undefined;

        effect(() => {
            const formGroup = this.mainFormGroup();

            subscription?.unsubscribe();
            subscription = formGroup.valueChanges
                .pipe(map(() => formGroup.getRawValue() as MainStatistics))
                .subscribe(value => this.mainStatisticsChange.set(value));

            return () => subscription?.unsubscribe();
        });
    }

    private subscribeToValueFormGroupChanges(): void {
        let subscription: Subscription | undefined;

        effect(() => {
            const formGroup = this.valueFormGroup();

            subscription?.unsubscribe();
            subscription = formGroup.valueChanges
                .pipe(map(() => formGroup.getRawValue() as ValueStatistics))
                .subscribe(value => this.valueStatisticsChange.set(value));

            return () => subscription?.unsubscribe();
        });
    }
}
