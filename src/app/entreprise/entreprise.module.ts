import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { EntrepriseListComponent } from './entreprise-list/entreprise-list.component';
import { CreationEntrepriseComponent } from './creation-entreprise/creation-entreprise.component';
import { EntrepriseRoutingModule } from './entreprise-routing.module';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EntrepriseRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  declarations: [EntrepriseComponent, EntrepriseListComponent, CreationEntrepriseComponent]
})
export class EntrepriseModule { }
