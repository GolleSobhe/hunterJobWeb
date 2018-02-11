import { CandidatRootComponent } from './candidat-root/candidat-root.component';
import { CandidatNewComponent } from './candidat-new/candidat-new.component';
import {RouterModule, Routes} from '@angular/router';
import { NgModule, Component } from '@angular/core';

const routes: Routes = [{
    path: '', component: CandidatRootComponent,
    children : [
      { path: 'new', component: CandidatNewComponent}
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
