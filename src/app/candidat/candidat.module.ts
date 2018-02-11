import { CandidatRoutingModule } from './candidat-outing.module';
import { FormsModule } from '@angular/forms';
import { CandidatService } from './candidat.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatRootComponent } from './candidat-root/candidat-root.component';
import { CandidatListComponent } from './candidat-list/candidat-list.component';
import { CandidatNewComponent } from './candidat-new/candidat-new.component';
import { CandidatComponent } from './candidat/candidat.component';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule, MatInputModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule, MatInputModule,
    CandidatRoutingModule
  ],
  declarations: [CandidatRootComponent, CandidatListComponent, CandidatNewComponent, CandidatComponent],
  providers : [CandidatService]

})
export class CandidatModule { }
