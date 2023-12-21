import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { flowbiteAppInitializer } from './flowbite';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { DATABASE_TABLE, databaseInitializerFactory, databaseInitializerFactoryDeps } from './services/database.service';
import { CharacterTable } from './services/tables/character.table';

export const appConfig: ApplicationConfig = {
    providers: [
        { provide: APP_INITIALIZER, useFactory: () => flowbiteAppInitializer, multi: true },
        provideAnimations(),
        provideRouter(
            routes,
            withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
            withHashLocation(), // better compat with GitHub Pages
        ),
        provideHttpClient(withFetch()),
        CharacterTable,
        { provide: DATABASE_TABLE, useExisting: CharacterTable, multi: true },
        {
            provide: APP_INITIALIZER,
            useFactory: databaseInitializerFactory,
            deps: databaseInitializerFactoryDeps,
            multi: true,
        },
    ],
};
