import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'pap-character-dashboard',
    standalone: true,
    imports: [],
    templateUrl: './character-dashboard.component.html',
    styleUrl: './character-dashboard.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CharacterDashboardComponent {}
