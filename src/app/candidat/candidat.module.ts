import { NgModule } from '@angular/core';
import {SpinnerModule} from '@tsmean/spinner';
import { CandidatComponent } from './candidat/candidat.component';
import { CandidatNewComponent } from './candidat-new/candidat-new.component';
import { CandidatRoutingModule } from './candidat-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SignupComponent } from './signup/signup.component';
import { SiginComponent } from './sigin/sigin.component';

import { SharedModule } from '../shared/shared.module';
import { MatSliderModule } from '@angular/material';

@NgModule({
  imports: [
    CandidatRoutingModule,
    SharedModule,
    PdfViewerModule,

    //material module
    MatSliderModule,
    //Spinner
    SpinnerModule.forRoot({
    }),
  ],
  declarations: [CandidatComponent, CandidatNewComponent, SignupComponent, SiginComponent]
})
export class CandidatModule {
}
