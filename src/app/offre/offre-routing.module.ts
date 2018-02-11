import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {OffreComponent} from './offre/offre.component';

const ROUTES: Routes = [
  {path: '', component: OffreComponent}
];

// useHash: booléen activant la navigation avec des hash (#) au lieu de l'API history
// enableTracing: permet de savoir ce qui se passe à l'interieur du root.
@NgModule({
  imports: [RouterModule.forRoot(ROUTES,
    {useHash: false, enableTracing: false, initialNavigation: true})],
  exports: [RouterModule],
  providers: []
})

export class OffreRoutingModule { }
