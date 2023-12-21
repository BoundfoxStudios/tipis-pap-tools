import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

let controlId = 0;

@Component({
    selector: 'pap-text-input',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './text-input.component.html',
    styleUrl: './text-input.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent {
    @Input() placeholder = '';
    @Input({ required: true }) label!: string;
    @Input({ required: true }) control!: FormControl;
    @Input() autoComplete = 'off';

    protected readonly id = `control_${controlId++}`;
}
