import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { EntrepriseListComponent } from './entreprise-list/entreprise-list.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { CreationEntrepriseComponent } from './creation-entreprise/creation-entreprise.component';


const routes: Routes = [
  {path: '', component: EntrepriseListComponent},
  {path: 'creer-entreprise', component: CreationEntrepriseComponent},
  {path: ':id', component: EntrepriseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EntrepriseRoutingModule {
}
