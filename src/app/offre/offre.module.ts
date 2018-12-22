import {NgModule} from '@angular/core';

import {OffreRoutingModule} from './offre-routing.module';
import {OffreListComponent} from './offre-list/offre-list.component';

import {
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule, MatInputModule, MatStepperModule, MatTabsModule, MatCheckboxModule, MatRadioModule, MatIconModule, MatAutocompleteModule,
  MatButtonToggleModule,
} from '@angular/material';

import {MatDialogModule} from '@angular/material/dialog';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { CreationOffreComponent } from './creation-offre/creation-offre.component';
import { IdentificationComponent } from './identification/identification.component';
import {GlobalSearchComponent} from '../common/global-search/global-search.component';
import { ComputerScienceComponent } from './creation-offre/computer-science/computer-science.component';
import { OthersProfessionComponent } from './creation-offre/others-profession/others-profession.component';
import {OffreDetailsComponent} from './offre-list/offre-details/offre-details.component';
import {PaymentComponent} from './creation-offre/payment/payment.component';
import {AppercuComponent} from './creation-offre/computer-science/appercu/appercu.component';

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
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatDialogModule,
  ],
  declarations: [
    OffreListComponent,
    CreationOffreComponent,
    IdentificationComponent,
    GlobalSearchComponent,
    ComputerScienceComponent,
    OffreDetailsComponent,
    PaymentComponent,
    OthersProfessionComponent,
    AppercuComponent
  ],
  exports: [],

  entryComponents: [
    AppercuComponent
  ],
})
export class OffreModule {
}
