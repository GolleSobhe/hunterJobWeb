import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OffreListComponent} from './offre-list/offre-list.component';
import {OffreService} from './offre.service';
import {OffreDetailsComponent} from './offre-list/offre-details/offre-details.component';
import {CreationOffreComponent} from './creation-offre/creation-offre.component';

const routes: Routes = [
  {path: '', component: OffreListComponent},
  {path: 'creer-offre', component: CreationOffreComponent},
  {path: ':id', component: OffreDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [OffreService]
})
export class OffreRoutingModule {
}
