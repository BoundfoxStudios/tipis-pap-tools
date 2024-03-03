import { inject, Injectable } from '@angular/core';
import { TransactionsTable } from './tables/transactions.table';
import { MainStatistics } from '../models/character/main-statistics';
import { ValueStatistics } from '../models/character/value-statistics';
import { CharacterCreationTransaction, StatisticsTransaction, TransactionType } from '../models/character/transaction.entity';
import { CharacterEntity } from '../models/character/character.entity';

@Injectable({ providedIn: 'root' })
export class TransactionsService {
    private readonly transactionsTable = inject(TransactionsTable);

    async writeCharacterCreation(character: CharacterEntity): Promise<void> {
        const transaction: CharacterCreationTransaction = {
            type: TransactionType.CharacterCreation,
            value: character,
        };

        await this.transactionsTable.add({
            transaction: transaction,
            characterId: character.id,
        });
    }

    async writeMainStatistics(characterId: number, main: MainStatistics): Promise<void> {
        for (const unsafeKey in main) {
            const key = unsafeKey as keyof MainStatistics;
            await this.writeStatistic(characterId, key, main[key], TransactionType.MainStatistic);
        }
    }

    async writeValueStatistics(characterId: number, value: ValueStatistics): Promise<void> {
        for (const unsafeKey in value) {
            const key = unsafeKey as keyof ValueStatistics;
            await this.writeStatistic(characterId, key, value[key], TransactionType.ValueStatistic);
        }
    }

    private async writeStatistic(
        characterId: number,
        name: keyof MainStatistics | keyof ValueStatistics,
        value: number,
        type: TransactionType.MainStatistic | TransactionType.ValueStatistic,
    ): Promise<void> {
        const transaction: StatisticsTransaction = {
            type: type,
            statistic: name,
            value,
        };

        await this.transactionsTable.add({
            transaction: transaction,
            characterId,
        });
    }
}
