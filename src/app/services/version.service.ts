import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Version {
    version: string;
    sha?: string;
}

@Injectable({
    providedIn: 'root',
})
export class VersionService {
    private readonly http = inject(HttpClient);

    load(): Observable<Version> {
        return this.http.get<Version>('assets/version.json');
    }
}
