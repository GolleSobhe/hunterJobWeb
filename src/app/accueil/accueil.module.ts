import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import {
  MatFormFieldModule, MatGridListModule, MatButtonModule, MatInputModule, MatCardModule, MatSelectModule,
  MatIconModule
} from '@angular/material';
import {NgxCarouselModule} from 'ngx-carousel';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,

    NgxCarouselModule
  ],
  declarations: [AccueilComponent]
})
export class AccueilModule { }
