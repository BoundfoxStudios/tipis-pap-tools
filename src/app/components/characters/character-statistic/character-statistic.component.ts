import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'pap-character-statistic',
    standalone: true,
    imports: [],
    templateUrl: './character-statistic.component.html',
    styleUrl: './character-statistic.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterStatisticComponent {
    @Input({ required: true }) label!: string;
    @Input() allowEdit = false;
    @Input() allowOneIncrement = true;
    @Input() allowTenIncrement = true;
    @Input({ required: true }) value!: number;
    @Output() incrementChange = new EventEmitter<number>();
}
