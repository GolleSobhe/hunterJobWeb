import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatComponent } from './candidat/candidat.component';
import { CandidatListComponent } from './candidat-list/candidat-list.component';
import { CandidatNewComponent } from './candidat-new/candidat-new.component';
import { MatStepperModule, MatFormFieldModule } from '@angular/material';
import { CandidatRoutingModule } from './candidat-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CandidatRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CandidatComponent, CandidatListComponent, CandidatNewComponent]
})
export class CandidatModule { }
