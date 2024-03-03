import { inject, Injectable } from '@angular/core';
import { DatabaseService } from '../database.service';
import { TransactionEntity } from '../../models/character/transaction.entity';
import { DateTime } from 'luxon';

@Injectable({ providedIn: 'root' })
export class TransactionsTable {
    private readonly databaseService = inject(DatabaseService);

    async add(transaction: Omit<TransactionEntity<unknown>, 'id' | 'timestamp'>): Promise<void> {
        await this.databaseService.transactions.add({
            ...transaction,
            timestamp: DateTime.now().toMillis(),
        } as TransactionEntity<unknown>);
    }
}
