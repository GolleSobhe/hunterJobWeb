import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { AccueilModule } from './accueil/accueil.module';
import {RouterModule} from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MenubarComponent } from './shared/common/menubar/menubar.component';
import { FooterComponent } from './shared/common/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule,    
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,

    //project module
    AccueilModule,
    SharedModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
