import { ChangeDetectionStrategy, Component, computed, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueUpdater } from '../../../types';

@Component({
    selector: 'pap-character-statistic',
    standalone: true,
    imports: [],
    templateUrl: './character-statistic.component.html',
    styleUrl: './character-statistic.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CharacterStatisticComponent),
            multi: true,
        },
    ],
})
export class CharacterStatisticComponent implements ControlValueAccessor {
    label = input.required<string>();
    allowEdit = input(false);
    minValue = input(0);
    maxValue = input(Number.MAX_SAFE_INTEGER);
    showTens = input(true);
    remainingPoints = input(Number.MAX_SAFE_INTEGER);
    protected value = signal(0);
    protected canUseTenIncrement = computed(() => this.remainingPoints() >= 10 && this.value() + 10 <= this.maxValue());
    protected canUseOneIncrement = computed(() => this.remainingPoints() >= 1 && this.value() + 1 <= this.maxValue());
    protected canUseTenDecrement = computed(() => this.value() - 10 >= this.minValue());
    protected canUseOneDecrement = computed(() => this.value() - 1 >= this.minValue());
    private onChange!: ValueUpdater;
    private onTouched!: VoidFunction;

    writeValue(value: number): void {
        this.value.set(value);
    }

    registerOnChange(fn: ValueUpdater): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: VoidFunction): void {
        this.onTouched = fn;
    }

    updateValue(update: number): void {
        this.value.update(value => value + update);
        this.onChange(this.value());
    }
}
