import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'pap-h2',
    standalone: true,
    imports: [],
    templateUrl: './h2.component.html',
    styleUrl: './h2.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class H2Component {}
