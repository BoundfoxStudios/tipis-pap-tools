import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'pap-create-character',
    standalone: true,
    imports: [],
    templateUrl: './create-character.component.html',
    styleUrl: './create-character.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreateCharacterComponent {}
