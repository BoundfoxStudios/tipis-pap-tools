import { MainStatistics } from './main-statistics';
import { ValueStatistics } from './value-statistics';

export interface CharacterEntity {
    id: number;
    name: string;
    gender: string;
    nation: string;
    age: number;
    religion: string;
    main: MainStatistics;
    value: ValueStatistics;
}
