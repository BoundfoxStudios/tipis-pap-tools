import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { H2Component } from '../headings/h2/h2.component';

@Component({
    selector: 'pap-content-group',
    standalone: true,
    imports: [H2Component],
    templateUrl: './content-group.component.html',
    styleUrl: './content-group.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentGroupComponent {
    @Input({ required: true }) label!: string;
}
