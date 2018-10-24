import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatComponent } from './candidat/candidat.component';
import { CandidatListComponent } from './candidat-list/candidat-list.component';
import { CandidatNewComponent } from './candidat-new/candidat-new.component';
import { MatStepperModule, MatFormFieldModule, MatCheckboxModule } from '@angular/material';
import { CandidatRoutingModule } from './candidat-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    CandidatRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    PdfViewerModule
  ],
  declarations: [CandidatComponent, CandidatListComponent, CandidatNewComponent]
})
export class CandidatModule { }
