import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { H2Component } from '../headings/h2/h2.component';
import { H3Component } from '../headings/h3/h3.component';
import { SecondaryH1Component } from '../headings/secondary-h1/secondary-h1.component';

@Component({
    selector: 'pap-content-group',
    standalone: true,
    imports: [H2Component, H3Component, SecondaryH1Component],
    templateUrl: './content-group.component.html',
    styleUrl: './content-group.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentGroupComponent {
    title = input.required();
    footer = input<string>();
}
