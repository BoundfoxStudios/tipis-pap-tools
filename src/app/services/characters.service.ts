import { inject, Injectable } from '@angular/core';
import { CharacterEntity } from '../models/character/character.entity';
import { MainStatistics } from '../models/character/main-statistics';
import { CharactersTable } from './tables/characters.table';
import { TransactionsService } from './transactions.service';
import { Statistics } from '../models/character/statistics';
import { ValueStatistics } from '../models/character/value-statistics';

@Injectable({
    providedIn: 'root',
})
export class CharactersService {
    private readonly charactersTable = inject(CharactersTable);
    private readonly transactionsService = inject(TransactionsService);

    async updateStatistics(character: CharacterEntity) {
        await this.charactersTable.update(character);
        await this.transactionsService.writeMainStatistics(character.id, character.main);
        await this.transactionsService.writeValueStatistics(character.id, character.value);
    }

    sumMainStatistics(statistics: MainStatistics): number {
        return statistics.agility + statistics.magic + statistics.spirit + statistics.intelligence + statistics.stamina + statistics.strength;
    }

    sumValueStatistics(value: ValueStatistics): number {
        return (
            value.reaction +
            value.mana +
            value.manaRegeneration +
            value.life +
            value.energy +
            value.magicControl +
            value.magicTolerance +
            value.magicDefense +
            value.perception +
            value.precision +
            value.power +
            value.cover +
            value.authority
        );
    }

    async add(character: Omit<CharacterEntity, 'id' | 'value'>): Promise<CharacterEntity> {
        const characterEntity = await this.charactersTable.add({
            ...character,
            value: {
                life: 0,
                power: 0,
                energy: 0,
                magicDefense: 0,
                magicTolerance: 0,
                magicControl: 0,
                precision: 0,
                perception: 0,
                mana: 0,
                manaRegeneration: 0,
                reaction: 0,
                cover: 0,
                authority: 0,
            },
        });

        await this.transactionsService.writeCharacterCreation(characterEntity);

        return characterEntity;
    }

    async list(): Promise<CharacterEntity[]> {
        return await this.charactersTable.list();
    }

    generateStatisticsDiff(a: Statistics, b: Statistics): Statistics {
        return {
            main: {
                strength: b.main.strength - a.main.strength,
                agility: b.main.agility - a.main.agility,
                stamina: b.main.stamina - a.main.stamina,
                magic: b.main.magic - a.main.magic,
                spirit: b.main.spirit - a.main.spirit,
                intelligence: b.main.intelligence - a.main.intelligence,
            },
            value: {
                life: b.value.life - a.value.life,
                power: b.value.power - a.value.power,
                energy: b.value.energy - a.value.energy,
                magicDefense: b.value.magicDefense - a.value.magicDefense,
                magicTolerance: b.value.magicTolerance - a.value.magicTolerance,
                magicControl: b.value.magicControl - a.value.magicControl,
                precision: b.value.precision - a.value.precision,
                perception: b.value.perception - a.value.perception,
                mana: b.value.mana - a.value.mana,
                manaRegeneration: b.value.manaRegeneration - a.value.manaRegeneration,
                reaction: b.value.reaction - a.value.reaction,
                cover: b.value.cover - a.value.cover,
                authority: b.value.authority - a.value.authority,
            },
        };
    }

    hasStatisticsChanges(a: Statistics, b: Statistics): boolean {
        const diff = this.generateStatisticsDiff(a, b);
        const mainStatsZero = Object.values(diff.main).every(value => value === 0);
        const valueStatsZero = Object.values(diff.value).every(value => value === 0);

        return !mainStatsZero || !valueStatsZero;
    }

    calculateValueStatistics({ main, value }: Statistics): ValueStatistics {
        return {
            life: value.life + main.strength + 1.5 * main.stamina,
            mana: value.mana + main.spirit + 1.5 * main.intelligence + 0.5 * main.magic,
            power: value.power + main.strength + 0.5 * main.agility,
            precision: value.precision + 0.5 * main.strength + main.agility,
            reaction: value.reaction + 0.5 * main.strength + main.agility + main.intelligence,
            energy: value.energy + main.strength + 0.5 * main.stamina,
            perception: value.perception + main.intelligence + 0.5 * main.spirit,
            cover: value.cover + 1.5 * main.agility,
            magicDefense: value.magicDefense + main.stamina + main.magic + 0.5 * main.spirit,
            magicControl: value.magicControl + main.magic + main.spirit + 0.5 * main.intelligence,
            magicTolerance: value.magicTolerance + 0.5 * main.magic + main.spirit,
            manaRegeneration: value.manaRegeneration + 0.5 * main.magic + main.spirit,
            authority: value.authority,
        };
    }
}
