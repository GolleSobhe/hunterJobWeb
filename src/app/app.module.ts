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
import { WelcomeComponent } from './common/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    FooterComponent,
    GlobalSearchComponent,
    WelcomeComponent
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
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
