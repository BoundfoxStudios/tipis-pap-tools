import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars, faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { DarkModeToggleComponent } from '../dark-mode-toggle/dark-mode-toggle.component';
import { EditModeComponent } from '../edit-mode/edit-mode.component';

@Component({
    selector: 'pap-header',
    standalone: true,
    imports: [FaIconComponent, DarkModeToggleComponent, EditModeComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    protected readonly faBars = faBars;
    protected readonly faDiceD20 = faDiceD20;
}
