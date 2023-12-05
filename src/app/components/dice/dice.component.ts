import { AfterViewInit, Component } from '@angular/core';
import DiceBox from '@3d-dice/dice-box';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'pap-dice',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './dice.component.html',
    styleUrl: './dice.component.css',
})
export default class DiceComponent implements AfterViewInit {
    protected dice = '2d20';
    protected result = '';

    private diceBox!: DiceBox;

    async ngAfterViewInit(): Promise<void> {
        this.diceBox = new DiceBox('#dice-canvas', {
            assetPath: '/assets/dice/',
            scale: 8,
        });

        this.diceBox.onRollComplete = (rollResult): void => {
            this.result = rollResult
                .flatMap(roll => roll.rolls)
                .map(roll => roll.value)
                .join(', ');
        };

        await this.diceBox.init();
    }

    protected roll(): void {
        this.diceBox.roll(this.dice);
    }
}
