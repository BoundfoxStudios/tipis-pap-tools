import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { databaseInitializerFactory, databaseInitializerFactoryDeps } from './services/database.service';
import { characterStoreInitializerFactory, characterStoreInitializerFactoryDeps } from './stores/character.store';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideRouter(
            routes,
            withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
            withHashLocation(), // better compat with GitHub Pages
        ),
        provideHttpClient(withFetch()),
        {
            provide: APP_INITIALIZER,
            useFactory: databaseInitializerFactory,
            deps: databaseInitializerFactoryDeps,
            multi: true,
        },
        {
            provide: APP_INITIALIZER,
            useFactory: characterStoreInitializerFactory,
            deps: characterStoreInitializerFactoryDeps,
            multi: true,
        },
    ],
};
