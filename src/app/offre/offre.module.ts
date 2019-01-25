import {NgModule} from '@angular/core';

import {OffreRoutingModule} from './offre-routing.module';

import {
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
  MatButtonToggleModule, MatButtonModule,
} from '@angular/material';

import {MatDialogModule} from '@angular/material/dialog';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CreationOffreComponent} from './creation-offre/creation-offre.component';
import {IdentificationComponent} from './identification/identification.component';
import {GlobalSearchComponent} from '../common/global-search/global-search.component';
import {ComputerScienceComponent} from './creation-offre/computer-science/computer-science.component';
import {OthersProfessionComponent} from './creation-offre/others-profession/others-profession.component';
import {PaymentComponent} from './creation-offre/payment/payment.component';
import {AppercuComponent} from './creation-offre/computer-science/appercu/appercu.component';
import { OffreListComponent } from './offre-list/offre-list.component';
import { OffreItemComponent } from './offre-item/offre-item.component';
import { OffreDisplayComponent } from './offre-display/offre-display.component';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  imports: [
    OffreRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,

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
    MatButtonModule
  ],
  declarations: [
    CreationOffreComponent,
    IdentificationComponent,
    GlobalSearchComponent,
    ComputerScienceComponent,
    PaymentComponent,
    OthersProfessionComponent,
    AppercuComponent,
    OffreListComponent,
    OffreItemComponent,
    OffreDisplayComponent,

    TruncatePipe
  ],
  exports: [],

  entryComponents: [
    AppercuComponent
  ],
})
export class OffreModule {
}
