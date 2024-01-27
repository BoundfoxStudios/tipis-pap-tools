export interface CharacterEntity {
    id: number;
    name: string;
    main: MainStatistics;
    value: ValueStatistics;
}

export interface MainStatistics {
    /**
     * Stärke.
     */
    strength: number;

    /**
     * Beweglichkeit.
     */
    agility: number;

    /**
     * Stamina.
     */
    stamina: number;

    /**
     * Magie.
     */
    magic: number;

    /**
     * Geist.
     */
    spirit: number;

    /**
     * Intelligenz.
     */
    intelligence: number;
}

export interface ValueStatistics {
    /**
     * Leben.
     */
    life: number;

    /**
     * Kraft.
     */
    power: number;

    /**
     * Energie.
     */
    energy: number;

    /**
     * Magie Abwehr.
     */
    magicDefense: number;

    /**
     * Magie Toleranz.
     */
    magicTolerance: number;

    /**
     * Magie Lenkung.
     */
    magicControl: number;

    /**
     * Treffen.
     */
    strike: number;

    /**
     * Wahrnehmung.
     */
    perception: number;

    /**
     * Mana.
     */
    mana: number;

    /**
     * Mana Regenerierung.
     */
    manaRegeneration: number;

    /**
     * Reaktion.
     */
    reaction: number;

    /**
     * Tarnung.
     */
    cover: number;

    /**
     * Kontrolle.
     */
    authority: number;
}
