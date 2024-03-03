import { MainStatistics } from './main-statistics';
import { ValueStatistics } from './value-statistics';
import { CharacterEntity } from './character.entity';

export enum TransactionType {
    CharacterCreation = 'character-creation',
    MainStatistic = 'main-statistic',
    ValueStatistic = 'value-statistic',
}

export interface TransactionEntity<T> {
    id: number;
    characterId: number;
    transaction: Transaction<T>;
    timestamp: number;
}

export interface Transaction<T> {
    type: TransactionType;
    value: T;
}

export interface StatisticsTransaction extends Transaction<number> {
    type: TransactionType.MainStatistic | TransactionType.ValueStatistic;
    statistic: keyof MainStatistics | keyof ValueStatistics;
    value: number;
}

export interface CharacterCreationTransaction extends Transaction<CharacterEntity> {
    type: TransactionType.CharacterCreation;
    value: CharacterEntity;
}
