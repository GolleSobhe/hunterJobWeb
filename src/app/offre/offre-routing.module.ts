import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OffreService} from './offre.service';
import {CreationOffreComponent} from './creation-offre/creation-offre.component';
import {OffreListComponent} from './offre-list/offre-list.component';
import {OffreDisplayComponent} from './offre-display/offre-display.component';

const routes: Routes = [
  {path: 'creer', component: CreationOffreComponent},
  { path: 'page/:page', component: OffreListComponent },
  {path: ':id', component: OffreDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [OffreService]
})
export class OffreRoutingModule {
}
