import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars, faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { DarkLightModeComponent } from '../dark-light-mode/dark-light-mode.component';
import { EditModeComponent } from '../edit-mode/edit-mode.component';

@Component({
    selector: 'pap-header',
    standalone: true,
    imports: [FaIconComponent, DarkLightModeComponent, EditModeComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    protected readonly faBars = faBars;
    protected readonly faDiceD20 = faDiceD20;
}
