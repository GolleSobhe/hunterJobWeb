import {NgModule} from '@angular/core';

import {OffreRoutingModule} from './offre-routing.module';

import {CreationOffreComponent} from './creation-offre/creation-offre.component';
import {IdentificationComponent} from './identification/identification.component';
import {ComputerScienceComponent} from './creation-offre/computer-science/computer-science.component';
import {OthersProfessionComponent} from './creation-offre/others-profession/others-profession.component';
import {PaymentComponent} from './creation-offre/payment/payment.component';
import {AppercuComponent} from './creation-offre/computer-science/appercu/appercu.component';
import { OffreListComponent } from './offre-list/offre-list.component';
import { OffreItemComponent } from './offre-item/offre-item.component';
import { OffreDisplayComponent } from './offre-display/offre-display.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SharedModule } from '../shared/shared.module';

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    OffreRoutingModule,
    SharedModule,
    NgxPaginationModule
  ],
  declarations: [
    CreationOffreComponent,
    IdentificationComponent,
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
