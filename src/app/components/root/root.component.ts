import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'pap-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './root.component.html',
    styleUrl: './root.component.css',
})
export class RootComponent {}
