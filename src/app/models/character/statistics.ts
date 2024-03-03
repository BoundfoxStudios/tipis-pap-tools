import { MainStatistics } from './main-statistics';
import { ValueStatistics } from './value-statistics';

export interface Statistics {
    main: MainStatistics;
    value: ValueStatistics;
}
