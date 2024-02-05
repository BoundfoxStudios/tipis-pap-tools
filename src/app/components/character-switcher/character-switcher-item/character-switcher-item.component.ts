import { ChangeDetectionStrategy, Component, computed, input, Input } from '@angular/core';

const createInitials = (name: string) => {
    const regExp = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

    const initials = [...name.matchAll(regExp)] || [];

    return ((initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')).toUpperCase();
};

@Component({
    selector: 'pap-character-switcher-item',
    standalone: true,
    imports: [],
    templateUrl: './character-switcher-item.component.html',
    styleUrl: './character-switcher-item.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterSwitcherItemComponent {
    @Input() group = '';
    characterName = input.required<string>();

    initials = computed(() => {
        const characterName = this.characterName();
        return createInitials(characterName);
    });
}
