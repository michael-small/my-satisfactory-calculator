import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { RawMaterial } from '../models/items.model';

@Injectable({
    providedIn: 'root',
})
export class ItemsService {
    jsonServerUrl = 'http://localhost:3000' as const;

    constructor(private http: HttpClient) {}

    getRawMaterials(): Observable<RawMaterial[]> {
        return this.http.get<RawMaterial[]>(`${this.jsonServerUrl}/rawMaterials`).pipe(catchError(() => of([])));
    }
}
