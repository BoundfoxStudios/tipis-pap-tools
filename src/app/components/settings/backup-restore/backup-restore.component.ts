import { ChangeDetectionStrategy, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { H1Component } from '../../headings/h1/h1.component';
import { ButtonComponent } from '../../buttons/button/button.component';
import { DatabaseService } from '../../../services/database.service';
import { TauriService } from '../../../services/tauri.service';
import { DateTime } from 'luxon';
import { H2Component } from '../../headings/h2/h2.component';
import { H3Component } from '../../headings/h3/h3.component';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FileDirective } from '../../../directives/file.directive';

@Component({
    selector: 'pap-backup-restore',
    standalone: true,
    imports: [H1Component, ButtonComponent, H2Component, H3Component, FormsModule, ReactiveFormsModule, FileDirective],
    templateUrl: './backup-restore.component.html',
    styleUrl: './backup-restore.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BackupRestoreComponent {
    protected readonly fileControl = new FormControl<File | null>(null, { validators: [Validators.required] });
    private readonly databaseService = inject(DatabaseService);
    private readonly tauriService = inject(TauriService);
    @ViewChild('fileInput')
    private readonly fileInputElement!: ElementRef<HTMLInputElement>;

    async createBackup(): Promise<void> {
        const blob = await this.databaseService.exportToBlob();

        await this.tauriService.save(blob, `Tipis-PAP-Tools-${DateTime.now().toLocaleString({ dateStyle: 'medium' })}.json`);
    }

    import(): void {
        this.fileInputElement.nativeElement.click();
    }

    async fileChange(): Promise<void> {
        if (this.fileControl.invalid) {
            return;
        }

        const { value } = this.fileControl;

        if (!value) {
            void this.tauriService.message('Leider konnte die gewählte Datei nicht erkannt werden.');
            this.fileControl.reset(null, { emitEvent: false });
            return;
        }

        const confirm = await this.tauriService.confirm(`Möchtest Du wirklich die Datei "${value.name}" importieren?`);

        if (!confirm) {
            this.fileControl.reset(null, { emitEvent: false });
            return;
        }

        const result = await this.databaseService.importFromBlob(value);

        if (!result) {
            void this.tauriService.message('Leider konnte die gewählte Datei nicht importiert werden.');
            this.fileControl.reset(null, { emitEvent: false });
            return;
        }

        window.location.reload();
    }

    async reset(): Promise<void> {
        const confirm = await this.tauriService.confirm('Möchtest Du wirklich die gesamte Anwendung zurücksetzen?');

        if (!confirm) {
            return;
        }

        await this.databaseService.clear();
        window.location.reload();
    }
}
