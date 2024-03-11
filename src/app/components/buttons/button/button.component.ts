import { ChangeDetectionStrategy, Component, EventEmitter, input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'pap-button',
    standalone: true,
    imports: [NgClass],
    templateUrl: './button.component.html',
    styleUrl: './button.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    disabled = input(false);
    danger = input(false);
    type = input<'button' | 'submit'>('button');
    @Output() tap = new EventEmitter();
}
