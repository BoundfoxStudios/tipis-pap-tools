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
import { CharactersService } from '../../../services/characters.service';
import { SecondaryH1Component } from '../../headings/secondary-h1/secondary-h1.component';

@Component({
    selector: 'pap-character-dashboard',
    standalone: true,
    imports: [H1Component, CharacterStatisticComponent, ContentGroupComponent, SecondaryH1Component],
    templateUrl: './character-dashboard.component.html',
    styleUrl: './character-dashboard.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CharacterDashboardComponent {
    protected readonly editModeStore = inject(EditModeStore);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly characterStore = inject(CharacterStore);
    private readonly charactersService = inject(CharactersService);
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

    protected updateStrength(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            main: { ...character.main, strength: character.main.strength + increment },
        });
    }

    protected updateAgility(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            main: { ...character.main, agility: character.main.agility + increment },
        });
    }

    protected updateStamina(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            main: { ...character.main, stamina: character.main.stamina + increment },
        });
    }

    protected updateMagic(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            main: { ...character.main, magic: character.main.magic + increment },
        });
    }

    protected updateSpirit(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            main: { ...character.main, spirit: character.main.spirit + increment },
        });
    }

    protected updateIntelligence(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            main: { ...character.main, intelligence: character.main.intelligence + increment },
        });
    }

    protected updateLife(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            value: { ...character.value, life: character.value.life + increment },
        });
    }

    protected updatePower(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            value: { ...character.value, power: character.value.power + increment },
        });
    }

    protected updateEnergy(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            value: { ...character.value, energy: character.value.energy + increment },
        });
    }

    protected updateStrike(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            value: { ...character.value, strike: character.value.strike + increment },
        });
    }

    protected updatePerception(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            value: { ...character.value, perception: character.value.perception + increment },
        });
    }

    protected updateMagicDefense(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            value: { ...character.value, magicDefense: character.value.magicDefense + increment },
        });
    }

    protected updateMagicTolerance(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            value: { ...character.value, magicTolerance: character.value.magicTolerance + increment },
        });
    }

    protected updateMagicControl(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            value: { ...character.value, magicControl: character.value.magicControl + increment },
        });
    }

    protected updateMana(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            value: { ...character.value, mana: character.value.mana + increment },
        });
    }

    protected updateManaRegeneration(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            value: { ...character.value, manaRegeneration: character.value.manaRegeneration + increment },
        });
    }

    protected updateReaction(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            value: { ...character.value, reaction: character.value.reaction + increment },
        });
    }

    protected updateCover(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            value: { ...character.value, cover: character.value.cover + increment },
        });
    }

    protected updateAuthority(character: CharacterEntity, increment: number) {
        void this.charactersService.update({
            ...character,
            value: { ...character.value, authority: character.value.authority + increment },
        });
    }
}
