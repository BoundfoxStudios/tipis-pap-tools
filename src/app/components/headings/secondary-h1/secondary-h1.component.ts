import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'pap-secondary-h1',
    standalone: true,
    imports: [],
    templateUrl: './secondary-h1.component.html',
    styleUrl: './secondary-h1.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondaryH1Component {}
