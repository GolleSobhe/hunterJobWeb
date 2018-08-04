import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { AccueilComponent } from './accueil/accueil/accueil.component';



const ROUTES: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},

  {path: 'candidat', loadChildren : 'app/candidat/candidat.module#CandidatModule'},
  {path: 'offres', loadChildren : 'app/offre/offre.module#OffreModule'},
];

// useHash: booléen activant la navigation avec des hash (#) au lieu de l'API history
// enableTracing: permet de savoir ce qui se passe à l'interieur du root.
@NgModule({
  imports: [RouterModule.forRoot(ROUTES,
    {useHash: false, enableTracing: false, initialNavigation: true})],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
