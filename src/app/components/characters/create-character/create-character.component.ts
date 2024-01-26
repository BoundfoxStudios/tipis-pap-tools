import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { H1Component } from '../../headings/h1/h1.component';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextInputComponent } from '../../inputs/text-input/text-input.component';
import { SubmitButtonComponent } from '../../inputs/submit-button/submit-button.component';
import { Router, RouterLink } from '@angular/router';
import { CharacterStore } from '../../../stores/character.store';

@Component({
    selector: 'pap-create-character',
    standalone: true,
    imports: [H1Component, TextInputComponent, SubmitButtonComponent, FormsModule, ReactiveFormsModule, RouterLink],
    templateUrl: './create-character.component.html',
    styleUrl: './create-character.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreateCharacterComponent {
    protected readonly formGroup = inject(FormBuilder).group({
        name: ['', Validators.required],
    });
    protected readonly characterStore = inject(CharacterStore);
    private readonly router = inject(Router);

    protected async submit(): Promise<void> {
        if (this.formGroup.invalid) {
            return;
        }

        const id = await this.characterStore.create(this.formGroup.value.name!);
        await this.router.navigate(['/characters', id, 'dashboard']);
    }
}
