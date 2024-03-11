import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CharacterStatisticComponent } from '../character-statistic/character-statistic.component';
import { ContentGroupComponent } from '../../../content-group/content-group.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'pap-character-main-statistics',
    standalone: true,
    imports: [CharacterStatisticComponent, ContentGroupComponent, ReactiveFormsModule],
    templateUrl: './character-main-statistics.component.html',
    styleUrl: './character-main-statistics.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterMainStatisticsComponent {
    formGroup = input.required<FormGroup>();
    footer = input('');
    remainingPoints = input(0);
    allowEdit = input(false);
}
