import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { DarkModeStore } from '../../stores/dark-mode.store';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'pap-dark-mode-toggle',
    standalone: true,
    imports: [FaIconComponent],
    templateUrl: './dark-mode-toggle.component.html',
    styleUrl: './dark-mode-toggle.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkModeToggleComponent {
    protected readonly darkModeStore = inject(DarkModeStore);
    protected readonly faSun = faSun;
    protected readonly faMoon = faMoon;
}
