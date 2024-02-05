import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowRotateBackward, faDashboard, faDiceD6, faDragon, faGears, faHeart, faTools } from '@fortawesome/free-solid-svg-icons';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { VersionService } from '../../services/version.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { SidebarItemGroupComponent } from './sidebar-item-group/sidebar-item-group.component';
import { ActivatedRoute, NavigationEnd, Router, RouterLinkActive } from '@angular/router';
import { CharacterSwitcherComponent } from '../character-switcher/character-switcher.component';
import { CharactersStore } from '../../stores/characters.store';
import { filter, map } from 'rxjs';
import { CharacterEntity } from '../../models/character/character.entity';

@Component({
    selector: 'pap-sidebar',
    standalone: true,
    imports: [FaIconComponent, SidebarItemComponent, AsyncPipe, SidebarItemGroupComponent, RouterLinkActive, CharacterSwitcherComponent, JsonPipe],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
    protected readonly faDiceD6 = faDiceD6;
    protected readonly faHeart = faHeart;
    protected readonly faGithub = faGithub;
    protected readonly faDragon = faDragon;
    protected readonly faDashboard = faDashboard;
    protected readonly faTools = faTools;
    protected readonly faGears = faGears;
    protected readonly faArrowRotateBackward = faArrowRotateBackward;
    protected readonly charactersStore = inject(CharactersStore);
    protected readonly currentCharacter = computed(() => {
        const id = this.characterId();

        if (!id) {
            return null;
        }

        const entities = this.charactersStore.entityMap();
        return entities[id];
    });
    protected readonly currentCharacterIdOrDefault = computed(() => {
        const currentCharacter = this.currentCharacter();

        return currentCharacter?.id ?? 1;
    });
    private readonly versionService = inject(VersionService);
    protected readonly versionSignal = toSignal(this.versionService.load());
    private readonly router = inject(Router);
    private readonly route = inject(ActivatedRoute);
    readonly characterId = toSignal(
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.getParams(this.route)),
            map(params => params.characterId ?? null),
        ),
    );

    protected switchCharacter(character: CharacterEntity) {
        void this.router.navigate(['/characters', character.id, 'dashboard']);
    }

    private getParams(route: ActivatedRoute): { characterId?: string } {
        let params = route.snapshot.params;
        params = { ...route.snapshot.queryParams, ...params };
        if (route.children) {
            for (const r of route.children) {
                params = { ...this.getParams(r), ...params };
            }
        }
        return params;
    }
}
