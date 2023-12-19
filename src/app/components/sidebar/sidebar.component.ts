import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faDiceD6, faHeart, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { VersionService } from '../../services/version.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { SidebarItemGroupComponent } from './sidebar-item-group/sidebar-item-group.component';
import { RouterLinkActive } from '@angular/router';

@Component({
    selector: 'pap-sidebar',
    standalone: true,
    imports: [FaIconComponent, SidebarItemComponent, AsyncPipe, SidebarItemGroupComponent, RouterLinkActive],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
    protected readonly faDiceD6 = faDiceD6;
    protected readonly faHeart = faHeart;
    protected readonly faGithub = faGithub;
    private readonly versionService = inject(VersionService);
    protected readonly versionSignal = toSignal(this.versionService.load());
    protected readonly faToolbox = faToolbox;
}
