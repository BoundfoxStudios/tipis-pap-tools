import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { H1Component } from '../../headings/h1/h1.component';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextInputComponent } from '../../inputs/text-input/text-input.component';
import { SubmitButtonComponent } from '../../inputs/submit-button/submit-button.component';
import { CharacterService } from '../../../services/character.service';
import { Router } from '@angular/router';

@Component({
    selector: 'pap-create-character',
    standalone: true,
    imports: [H1Component, TextInputComponent, SubmitButtonComponent, FormsModule, ReactiveFormsModule],
    templateUrl: './create-character.component.html',
    styleUrl: './create-character.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreateCharacterComponent {
    private readonly characterService = inject(CharacterService);
    private readonly router = inject(Router);

    protected readonly formGroup = inject(FormBuilder).group({
        name: ['', Validators.required],
    });

    protected async submit(): Promise<void> {
        if (this.formGroup.invalid) {
            return;
        }

        const id = await this.characterService.createCharacter(this.formGroup.value.name!);
        await this.router.navigate(['/characters', id, 'dashboard']);
    }
}
