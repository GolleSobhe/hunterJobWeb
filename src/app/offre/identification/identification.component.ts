import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  identificationForm: FormGroup;
  creatonCompteForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulaireIdentification();
    this.formulaireCreationCompte();
  }

  formulaireIdentification() {
    this.identificationForm = this._formBuilder.group({
      mail: ['', { validators: [Validators.required]}],
      motDePasse: ['', { validators: [Validators.required]}]
    });
  }


  formulaireCreationCompte() {
    this.creatonCompteForm = this._formBuilder.group({
      mail: ['', { validators: [Validators.required]}],
      motDePasse: ['', { validators: [Validators.required]}],
      confirmerMotDePasse: ['', { validators: [Validators.required]}],
      nom: ['', { validators: [Validators.required]}],
      entreprise: ['', { validators: [Validators.required]}],
      telephone: ['', { validators: [Validators.required]}],
      pays: ['', { validators: [Validators.required]}],
      adresse: ['', { validators: [Validators.required]}],
    });
  }

  sidentififer() {

  }

  creationCompte() {

  }



}
