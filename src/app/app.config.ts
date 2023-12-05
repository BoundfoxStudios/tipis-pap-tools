import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { flowbiteAppInitializer } from './flowbite';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
    providers: [
        { provide: APP_INITIALIZER, useFactory: () => flowbiteAppInitializer, multi: true },
        provideAnimations(),
        provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
    ],
};
