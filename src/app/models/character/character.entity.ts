import { MainStatistics } from './main-statistics';
import { ValueStatistics } from './value-statistics';

export interface CharacterEntity {
    id: number;
    name: string;
    main: MainStatistics;
    value: ValueStatistics;
}
