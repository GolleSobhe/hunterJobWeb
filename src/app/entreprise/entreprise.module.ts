import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { EntrepriseListComponent } from './entreprise-list/entreprise-list.component';
import { EntrepriseRoutingModule } from './entreprise-routing.module';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule, MatFormFieldModule, MatSelectModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EntrepriseNewComponent } from './entreprise-new/entreprise-new.component';

@NgModule({
  imports: [
    CommonModule,
    EntrepriseRoutingModule,
    FormsModule,

    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule
  ],
  declarations: [EntrepriseComponent, EntrepriseListComponent, EntrepriseNewComponent]
})
export class EntrepriseModule { }
