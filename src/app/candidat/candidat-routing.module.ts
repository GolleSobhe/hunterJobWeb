import { Routes, RouterModule } from '@angular/router';
import { CandidatNewComponent } from './candidat-new/candidat-new.component';
import { CandidatComponent } from './candidat/candidat.component';
import { NgModule } from '@angular/core';
import { CandidatProfileComponent } from './candidat-profile/candidat-profile.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
    {path: 'new', component: CandidatNewComponent},
    {path: 'signup', component: SignupComponent},
    {path: ':id', component: CandidatComponent},
    {path: 'profile/:id', component: CandidatProfileComponent},
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class CandidatRoutingModule { }
