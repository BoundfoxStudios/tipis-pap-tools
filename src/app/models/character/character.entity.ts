import { MainStatistics } from './main-statistics';
import { ValueStatistics } from './value-statistics';

export interface CharacterEntity {
    id: number;
    name: string;
    gender: string;
    nation: string;
    age: number;
    religion: string;

    /**
     * Group is the "Spielrunde" where the character is played.
     */
    group: string;

    main: MainStatistics;
    value: ValueStatistics;
}
