import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    DestroyRef,
    HostBinding,
    inject,
    Input,
    QueryList,
    signal,
} from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { take } from 'rxjs';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'pap-sidebar-item-group',
    standalone: true,
    imports: [FaIconComponent],
    templateUrl: './sidebar-item-group.component.html',
    styleUrl: './sidebar-item-group.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarItemGroupComponent implements AfterContentInit {
    @Input({ required: true }) label = '';
    @Input({ required: true }) icon!: IconDefinition;
    @ContentChildren(SidebarItemComponent) items!: QueryList<SidebarItemComponent>;

    @HostBinding('class.is-open')
    protected isOpen = signal(false);

    private readonly destroyRef = inject(DestroyRef);

    ngAfterContentInit(): void {
        this.items.forEach(item => this.subscribeToChild(item));
    }

    private subscribeToChild(item: SidebarItemComponent): void {
        item.routerLinkActive.isActiveChange
            .pipe(takeUntilDestroyed(this.destroyRef), take(1))
            .subscribe(isActive => this.isOpen.update(current => current || isActive));
    }

    protected toggle(): void {
        this.isOpen.update(current => !current);
    }

    protected readonly faChevronDown = faChevronDown;
    protected readonly faChevronRight = faChevronRight;
}
