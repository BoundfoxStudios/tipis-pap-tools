import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'pap-h1',
    standalone: true,
    imports: [],
    templateUrl: './h1.component.html',
    styleUrl: './h1.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class H1Component {}
