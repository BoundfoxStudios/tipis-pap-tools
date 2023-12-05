import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars, faDiceD6 } from '@fortawesome/free-solid-svg-icons';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';

@Component({
  selector: 'pap-sidebar',
  standalone: true,
    imports: [
        FaIconComponent,
        SidebarItemComponent,
    ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
    protected faBars = faBars;
    protected readonly faDiceD6 = faDiceD6;
}
