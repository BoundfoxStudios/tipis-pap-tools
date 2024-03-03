import { inject, Injectable } from '@angular/core';
import { CharacterEntity } from '../models/character/character.entity';
import { MainStatistics } from '../models/character/main-statistics';
import { CharactersTable } from './tables/characters.table';
import { TransactionsService } from './transactions.service';
import { Statistics } from '../models/character/statistics';

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
                strike: 0,
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
                strike: b.value.strike - a.value.strike,
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
}
