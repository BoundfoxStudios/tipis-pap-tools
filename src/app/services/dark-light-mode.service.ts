import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class DarkLightModeService {
    private readonly document = inject(DOCUMENT);

    enableDarkMode(): void {
        this.document.body.parentElement!.classList.add('dark');
        this.document.body.parentElement!.classList.remove('light');
    }

    enableLightMode(): void {
        this.document.body.parentElement!.classList.add('light');
        this.document.body.parentElement!.classList.remove('dark');
    }
}
