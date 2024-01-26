import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EditModeStore } from '../../stores/edit-mode.store';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCheck, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'pap-edit-mode',
    standalone: true,
    imports: [FaIconComponent],
    templateUrl: './edit-mode.component.html',
    styleUrl: './edit-mode.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditModeComponent {
    protected readonly editModeStore = inject(EditModeStore);
    protected readonly faCheck = faCheck;
    protected readonly faPenToSquare = faPenToSquare;
}
