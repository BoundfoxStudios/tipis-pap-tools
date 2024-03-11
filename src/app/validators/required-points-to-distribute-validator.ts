import { CharactersService } from '../services/characters.service';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MainStatistics } from '../models/character/main-statistics';
import { ValueStatistics } from '../models/character/value-statistics';

export function requiredPointsToDistributeValidator(charactersService: CharactersService, requiredPointsToDistribute: number): ValidatorFn {
    return (control: AbstractControl<{ main: MainStatistics; value: ValueStatistics }>): ValidationErrors | null => {
        const mainSum = charactersService.sumMainStatistics(control.value.main);
        const valueSum = charactersService.sumValueStatistics(control.value.value);
        const sum = mainSum + valueSum / 3; // / 3 due to conversion
        if (sum !== requiredPointsToDistribute) {
            return { invalidDistributedPoints: true };
        }

        return null;
    };
}
