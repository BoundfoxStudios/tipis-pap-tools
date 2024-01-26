import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterStore } from '../../../stores/character.store';
import { filter, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { H1Component } from '../../headings/h1/h1.component';
import { CharacterStatisticComponent } from '../character-statistic/character-statistic.component';
import { CharacterEntity } from '../../../models/character/character.entity';
import { ContentGroupComponent } from '../../content-group/content-group.component';
import { EditModeStore } from '../../../stores/edit-mode.store';

@Component({
    selector: 'pap-character-dashboard',
    standalone: true,
    imports: [H1Component, CharacterStatisticComponent, ContentGroupComponent],
    templateUrl: './character-dashboard.component.html',
    styleUrl: './character-dashboard.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CharacterDashboardComponent {
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly characterStore = inject(CharacterStore);
    private readonly id = toSignal(
        this.activatedRoute.paramMap.pipe(
            map(params => params.get('id')),
            filter(id => !!id),
            map(id => +id!),
        ),
    );
    protected readonly character = computed(() => {
        return this.characterStore.entityMap()[this.id()!];
    });
    protected readonly editModeStore = inject(EditModeStore);

    protected updateStrength(character: CharacterEntity, increment: number) {
        void this.characterStore.update({ ...character, strength: character.strength + increment });
    }

    protected updateAgility(character: CharacterEntity, increment: number) {
        void this.characterStore.update({ ...character, agility: character.agility + increment });
    }

    protected updateStamina(character: CharacterEntity, increment: number) {
        void this.characterStore.update({ ...character, stamina: character.stamina + increment });
    }

    protected updateMagic(character: CharacterEntity, increment: number) {
        void this.characterStore.update({ ...character, magic: character.magic + increment });
    }

    protected updateSpirit(character: CharacterEntity, increment: number) {
        void this.characterStore.update({ ...character, spirit: character.spirit + increment });
    }

    protected updateIntelligence(character: CharacterEntity, increment: number) {
        void this.characterStore.update({ ...character, intelligence: character.intelligence + increment });
    }
}
