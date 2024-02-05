import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'pap-submit-button',
    standalone: true,
    imports: [NgClass],
    templateUrl: './submit-button.component.html',
    styleUrl: './submit-button.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmitButtonComponent {
    @Input() disabled = false;
    @Input() danger = false;
}
