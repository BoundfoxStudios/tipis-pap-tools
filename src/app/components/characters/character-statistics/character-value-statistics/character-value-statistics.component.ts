import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContentGroupComponent } from '../../../content-group/content-group.component';
import { CharacterStatisticComponent } from '../character-statistic/character-statistic.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ValueStatistics } from '../../../../models/character/value-statistics';

@Component({
    selector: 'pap-character-value-statistics',
    standalone: true,
    imports: [ContentGroupComponent, CharacterStatisticComponent, ReactiveFormsModule],
    templateUrl: './character-value-statistics.component.html',
    styleUrl: './character-value-statistics.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterValueStatisticsComponent {
    formGroup = input.required<FormGroup>();
    allowEdit = input(false);
    calculatedValueStatistics = input.required<ValueStatistics>();
    remainingPoints = input(0);
    footer = input('');
}
