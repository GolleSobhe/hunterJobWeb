import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';

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
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [],
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
  ],

  declarations: []
})
export class SharedModule { }
