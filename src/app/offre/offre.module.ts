import {NgModule} from '@angular/core';

import {OffreRoutingModule} from './offre-routing.module';
import {OffreRootComponent} from './offre-root/offre-root.component';
import {OffreListComponent} from './offre-list/offre-list.component';

import {
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule, MatInputModule, MatStepperModule, MatTabsModule, MatCheckboxModule, MatRadioModule, MatIconModule, MatAutocompleteModule,
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { OffreDetailsComponent } from './offre-list/offre-details/offre-details.component';
import { CreationOffreComponent } from './creation-offre/creation-offre.component';
import { IdentificationComponent } from './identification/identification.component';
import {GlobalSearchComponent} from '../common/global-search/global-search.component';
import { PaymentComponent } from './creation-offre/payment/payment.component';
import { ComputerScienceComponent } from './creation-offre/computer-science/computer-science.component';
import {OfferDetailsComponent} from './creation-offre/computer-science/offer-details/offer-details.component';
import {OfferDescriptionComponent} from './creation-offre/computer-science/offer-description/offer-description.component';
import { OthersProfessionComponent } from './creation-offre/others-profession/others-profession.component';

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
    MatAutocompleteModule
  ],
  declarations: [
    OffreRootComponent,
    OffreListComponent,
    OffreDetailsComponent,
    CreationOffreComponent,
    IdentificationComponent,
    GlobalSearchComponent,
    OfferDetailsComponent,
    OfferDescriptionComponent,
    PaymentComponent,
    ComputerScienceComponent,
    OthersProfessionComponent
  ]
})
export class OffreModule {
}
