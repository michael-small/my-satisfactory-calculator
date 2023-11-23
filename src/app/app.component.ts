import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ItemsService } from './services/items.service';
import { RawMaterial } from './models/items.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    itemService = inject(ItemsService);

    rawItems?: Observable<RawMaterial[]> = this.itemService.getRawMaterials();
}
