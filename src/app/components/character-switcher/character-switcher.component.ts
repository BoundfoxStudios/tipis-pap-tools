import { AfterViewInit, ChangeDetectionStrategy, Component, computed, ElementRef, EventEmitter, input, Output, ViewChild } from '@angular/core';
import { CharacterSwitcherItemComponent } from './character-switcher-item/character-switcher-item.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faRepeat, faUser } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { CharacterEntity } from '../../models/character/character.entity';
import { Dropdown } from 'flowbite';

@Component({
    selector: 'pap-character-switcher',
    standalone: true,
    imports: [CharacterSwitcherItemComponent, FaIconComponent, RouterLink],
    templateUrl: './character-switcher.component.html',
    styleUrl: './character-switcher.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterSwitcherComponent implements AfterViewInit {
    characters = input.required<CharacterEntity[]>();
    currentCharacter = input.required<CharacterEntity>();

    @Output() characterSelected = new EventEmitter<CharacterEntity>();
    protected readonly charactersWithoutCurrent = computed(() => {
        const characters = this.characters();
        const currentCharacter = this.currentCharacter();

        return characters.filter(character => character.id !== currentCharacter.id);
    });
    protected readonly faRepeat = faRepeat;
    protected readonly faUser = faUser;
    @ViewChild('dropdownTrigger', { read: ElementRef, static: true })
    private readonly dropdownTrigger!: ElementRef<HTMLElement>;
    @ViewChild('dropdownTarget', { static: true })
    private readonly dropdownTarget!: ElementRef<HTMLElement>;
    private dropdown!: Dropdown;

    ngAfterViewInit() {
        this.dropdown = new Dropdown(this.dropdownTarget.nativeElement, this.dropdownTrigger.nativeElement, {
            placement: 'top',
        });
    }

    protected selectCharacter(character: CharacterEntity) {
        this.dropdown.hide();
        this.characterSelected.emit(character);
    }
}
