import { CharactersService } from '../services/characters.service';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MainStatistics } from '../models/character/main-statistics';

export function requiredPointsToDistributeValidator(charactersService: CharactersService, requiredPointsToDistribute: number): ValidatorFn {
    return (control: AbstractControl<MainStatistics>): ValidationErrors | null => {
        const sum = charactersService.sumMainStatistics(control.value);
        if (sum !== requiredPointsToDistribute) {
            return { invalidDistributedPoints: true };
        }

        return null;
    };
}
