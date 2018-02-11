import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OffreRootComponent} from './offre-root/offre-root.component';
import {OffreEditComponent} from './offre-edit/offre-edit.component';
import {OffreListComponent} from './offre-list/offre-list.component';

const routes: Routes = [
  {path: '', component: OffreListComponent},
  {path: 'new', component: OffreEditComponent},
  {path: ':id', component: OffreEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffreRoutingModule { }
