import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { DarkLightModeStore } from '../../stores/dark-light-mode.store';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'pap-dark-light-mode',
    standalone: true,
    imports: [FaIconComponent],
    templateUrl: './dark-light-mode.component.html',
    styleUrl: './dark-light-mode.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkLightModeComponent {
    protected readonly darkLightModeStore = inject(DarkLightModeStore);
    protected readonly faSun = faSun;
    protected readonly faMoon = faMoon;
}
