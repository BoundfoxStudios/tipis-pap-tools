import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'pap-submit-button',
    standalone: true,
    imports: [],
    templateUrl: './submit-button.component.html',
    styleUrl: './submit-button.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmitButtonComponent {
    @Input() disabled = false;
}
