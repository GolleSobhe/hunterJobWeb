import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OffreEditComponent} from './offre-edit/offre-edit.component';
import {OffreListComponent} from './offre-list/offre-list.component';
import {OffreService} from './offre.service';
import {PropositionOffreComponent} from './offre-edit/proposition-offre/proposition-offre.component';
import {OffreDetailsComponent} from './offre-list/offre-details/offre-details.component';

const routes: Routes = [
  {path: '', component: OffreListComponent},
  {path: 'new', component: PropositionOffreComponent},
  {path: 'infos-offre', component: OffreEditComponent},
  {path: ':id', component: OffreDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [OffreService]
})
export class OffreRoutingModule {
}
