import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { initFlowbite } from 'flowbite';

@Component({
    selector: 'pap-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent],
    templateUrl: './root.component.html',
    styleUrl: './root.component.css',
})
export class RootComponent implements OnInit {
    ngOnInit(): void {
        initFlowbite();
    }
}
