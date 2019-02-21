import { NgModule } from '@angular/core';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { EntrepriseListComponent } from './entreprise-list/entreprise-list.component';
import { EntrepriseRoutingModule } from './entreprise-routing.module';
import { EntrepriseNewComponent } from './entreprise-new/entreprise-new.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    EntrepriseRoutingModule,
    SharedModule
  ],
  declarations: [EntrepriseComponent, EntrepriseListComponent, EntrepriseNewComponent]
})
export class EntrepriseModule { }
