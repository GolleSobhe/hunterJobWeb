import { Routes, RouterModule } from '@angular/router';
import { CandidatNewComponent } from './candidat-new/candidat-new.component';
import { CandidatListComponent } from './candidat-list/candidat-list.component';
import { CandidatComponent } from './candidat/candidat.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {path: '', component: CandidatListComponent},
    {path: 'new', component: CandidatNewComponent},
    {path: 'candidat', component: CandidatComponent},
    {path: ':id', component: CandidatComponent},
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class CandidatRoutingModule { }
