import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from '../shared/layout/layout.module';
import { CardsComponent } from './cards.component';

import { routing } from './cards.routes';

@NgModule({
    declarations: [
        CardsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        LayoutModule,
        routing
    ]
})
export class CardsModule { }
