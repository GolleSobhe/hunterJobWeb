import { NgModule } from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';
import { AcceuilService } from './acceuil.service';
import { NgxCarouselModule } from 'ngx-carousel';

import {
  MatToolbarModule,
} from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    NgxCarouselModule,
    MatToolbarModule,
  ],
  providers: [AcceuilService],
  declarations: [AccueilComponent]
})
export class AccueilModule { }
