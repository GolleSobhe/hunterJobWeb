import { CandidatComponent } from './candidat/candidat.component';
import { CandidatListComponent } from './candidat-list/candidat-list.component';
import { CandidatRootComponent } from './candidat-root/candidat-root.component';
import { CandidatNewComponent } from './candidat-new/candidat-new.component';
import {RouterModule, Routes} from '@angular/router';
import { NgModule, Component } from '@angular/core';

const routes: Routes = [{
    path: '', component: CandidatRootComponent,
    children : [
      { path: 'new', component: CandidatNewComponent},
      { path : 'all', component: CandidatListComponent},
      { path : ':id', component: CandidatComponent}
    ]
  }];

// useHash: booléen activant la navigation avec des hash (#) au lieu de l'API history
// enableTracing: permet de savoir ce qui se passe à l'interieur du root.
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class CandidatRoutingModule { }
