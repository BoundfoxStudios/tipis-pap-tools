import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
    selector: 'pap-dark-mode-toggle',
    standalone: true,
    imports: [FaIconComponent],
    templateUrl: './dark-mode-toggle.component.html',
    styleUrl: './dark-mode-toggle.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkModeToggleComponent {
    protected readonly darkModeService = inject(DarkModeService);
    protected readonly faSun = faSun;
    protected readonly faMoon = faMoon;
}
