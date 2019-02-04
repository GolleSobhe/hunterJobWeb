import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatComponent } from './candidat/candidat.component';
import { CandidatNewComponent } from './candidat-new/candidat-new.component';
import { MatStepperModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, MatIconModule, MatSliderModule } from '@angular/material';
import { CandidatRoutingModule } from './candidat-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SignupComponent } from './signup/signup.component';
import { SiginComponent } from './sigin/sigin.component';

import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    CandidatRoutingModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    PdfViewerModule,

    MatInputModule,
    MatIconModule,
    MatSliderModule
  ],
  declarations: [CandidatComponent, CandidatNewComponent, SignupComponent, SiginComponent]
})
export class CandidatModule {
}
