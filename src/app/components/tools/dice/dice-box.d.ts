declare module '@3d-dice/dice-box' {
    export = DiceBox;

    interface ConstructorOptions {
        assetPath: string;
        scale?: number;
    }

    interface DieResult {
        /** the roll group this die belongs to */
        groupId: number;
        /**  the unique identifier for this die within the group */
        rollId: number;
        /**  the type of die */
        sides: number;
        /**  the theme that was assigned to this die */
        theme: string;
        /**  optional - HEX value for the theme's material color */
        themeColor: string;
        /**  the result for this die */
        value: number;
    }

    interface RollResult {
        id: 0;
        mods: [];
        qty: number;
        rolls: DieResult[];
        sides: number;
        theme: string;
        themeColor: string;
        value: number;
    }

    class DiceBox {
        onRollComplete: (rollResult: RollResult[]) => void;

        constructor(id: string, option: ConstructorOptions);

        init(): Promise<void>;

        roll(dice: string): void;
    }
}
