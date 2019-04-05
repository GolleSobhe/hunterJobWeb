import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { AccueilModule } from './accueil/accueil.module';
import {RouterModule} from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarComponent } from './common/menubar/menubar.component';
import { FooterComponent } from './common/footer/footer.component';
import { GlobalSearchComponent } from './common/global-search/global-search.component';
import { MessageService } from './common/message.service';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    FooterComponent,
    GlobalSearchComponent
  ],
  imports: [
    RouterModule,    
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,

    //project modules
    AccueilModule,
    SharedModule
  ],
  exports: [],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
