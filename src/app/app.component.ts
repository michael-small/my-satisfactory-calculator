import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ItemsService } from './services/items.service';
import { DerivedMaterial, RawMaterial } from './models/items.model';
import { Observable, map } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    itemService = inject(ItemsService);

    rawItems$: Observable<RawMaterial[]> = this.itemService.getRawMaterials();
    ores$ = this.rawItems$.pipe(map(items => items.filter(item => item.type === 'ore')));
    fluids$ = this.rawItems$.pipe(map(items => items.filter(item => item.type === 'fluid')));

    derivedMaterials$: Observable<DerivedMaterial[]> = this.itemService.getDerivedMaterials();
}
