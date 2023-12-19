import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars, faDiceD20 } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'pap-header',
    standalone: true,
    imports: [FaIconComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    protected readonly faBars = faBars;
    protected readonly faDiceD20 = faDiceD20;
}
