import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  MatButtonModule, MatCardModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatToolbarModule,
  MatFormFieldModule, MatOptionModule, MatSelectModule, MatAutocompleteModule,
} from '@angular/material';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {MenubarComponent} from './common/menubar/menubar.component';
import {CommonModule} from '@angular/common';
import { FooterComponent } from './common/footer/footer.component';
import { AccueilModule } from './accueil/accueil.module';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    // Les modules de material
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    // Module du projet
    AccueilModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
