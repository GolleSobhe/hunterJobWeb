import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatStepperModule,
  MatTabsModule,
  MatCheckboxModule,
  MatRadioModule,
  MatIconModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatDialogModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { ConfirmEmailMessageComponent } from './dialog-overview/confirm-email-message/confirm-email-message.component';

@NgModule({
  imports: [MatDialogModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,

    //material modules
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatStepperModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,

    DialogOverviewComponent,
    ConfirmEmailMessageComponent
  ],

  declarations: [DialogOverviewComponent, ConfirmEmailMessageComponent]
})
export class SharedModule { }
