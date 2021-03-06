import { Routes, RouterModule } from '@angular/router';
import { CandidatNewComponent } from './candidat-new/candidat-new.component';
import { CandidatComponent } from './candidat/candidat.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { SiginComponent } from './sigin/sigin.component';


const routes: Routes = [
    {path: 'new', component: CandidatNewComponent},
    {path: 'signUp', component: SignupComponent},
    {path: 'signIn', component: SiginComponent},
    {path: ':id', component: CandidatComponent},
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class CandidatRoutingModule { }
