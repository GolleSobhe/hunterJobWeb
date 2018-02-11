import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffreRoutingModule } from './offre-routing.module';
import { OffreRootComponent } from './offre-root/offre-root.component';
import { OffreListComponent } from './offre-list/offre-list.component';
import { OffreEditComponent } from './offre-edit/offre-edit.component';

@NgModule({
  imports: [
    CommonModule,
    OffreRoutingModule
  ],
  declarations: [OffreRootComponent, OffreListComponent, OffreEditComponent]
})
export class OffreModule { }
