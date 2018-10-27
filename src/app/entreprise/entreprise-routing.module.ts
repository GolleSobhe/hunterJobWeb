import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { EntrepriseListComponent } from './entreprise-list/entreprise-list.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { EntrepriseNewComponent } from './entreprise-new/entreprise-new.component';


const routes: Routes = [
  {path: '', component: EntrepriseListComponent},
  {path: 'new', component: EntrepriseNewComponent},
  {path: 'entreprise', component: EntrepriseComponent},
  {path: ':id', component: EntrepriseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EntrepriseRoutingModule {
}
