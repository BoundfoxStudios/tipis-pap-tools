import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'pap-sidebar-item',
    standalone: true,
    imports: [FaIconComponent, RouterLink, RouterLinkActive],
    templateUrl: './sidebar-item.component.html',
    styleUrl: './sidebar-item.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarItemComponent {
    @Input({ required: true }) icon!: IconProp;
    @Input({ required: true }) link: unknown[] = [];

    @ViewChild(RouterLinkActive, { static: true }) routerLinkActive!: RouterLinkActive;
}
