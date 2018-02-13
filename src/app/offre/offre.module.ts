import { NgModule } from '@angular/core';

import { OffreRoutingModule } from './offre-routing.module';
import { OffreRootComponent } from './offre-root/offre-root.component';
import { OffreListComponent } from './offre-list/offre-list.component';
import { OffreEditComponent } from './offre-edit/offre-edit.component';

import {
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    OffreRoutingModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule
  ],
  declarations: [OffreRootComponent, OffreListComponent, OffreEditComponent]
})
export class OffreModule { }
