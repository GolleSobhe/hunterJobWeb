import {NgModule} from '@angular/core';

import {OffreRoutingModule} from './offre-routing.module';
import {OffreRootComponent} from './offre-root/offre-root.component';
import {OffreListComponent} from './offre-list/offre-list.component';
import {OffreEditComponent} from './offre-edit/offre-edit.component';

import {
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule, MatInputModule, MatStepperModule, MatTabsModule, MatCheckboxModule, MatRadioModule, MatIconModule,
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PropositionOffreComponent} from './offre-edit/proposition-offre/proposition-offre.component';
import {CommonModule} from '@angular/common';
import { OffreDetailsComponent } from './offre-list/offre-details/offre-details.component';
import { CreationOffreComponent } from './creation-offre/creation-offre.component';
import { IdentificationComponent } from './identification/identification.component';
import {GlobalSearchComponent} from '../common/global-search/global-search.component';

@NgModule({
  imports: [
    OffreRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,

    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatStepperModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
  ],
  declarations: [
    OffreRootComponent,
    OffreListComponent,
    OffreEditComponent,
    PropositionOffreComponent,
    OffreDetailsComponent,
    CreationOffreComponent,
    IdentificationComponent,

    GlobalSearchComponent
  ]
})
export class OffreModule {
}
