import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OffreService} from '../../offre.service';

@Component({
  selector: 'app-computer-science',
  templateUrl: './computer-science.component.html',
  styleUrls: ['./computer-science.component.css']
})
export class ComputerScienceComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  offreForm: FormGroup;
  descriptionOffreForm: FormGroup;
  paimentForm: FormGroup;
  typeContrat = ['CDI', 'CDD', 'Stage'];
  typeCarte = ['Visa', 'Master card', 'Autre'];
  typePaiement = ['Paiement par carte', 'Autre'];


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.formulaireCreationOffre();
    this.formulaireDescriptionOffre();
    this.formulariePaiement();
  }

  formulaireCreationOffre() {
    this.offreForm = this._formBuilder.group({
      post: ['', { validators: [Validators.nullValidator]}],
      lieu: ['', { validators: [Validators.nullValidator]}],
      typeContrat: ['', { validators: [Validators.nullValidator]}],
      salaireMini: ['', { validators: [Validators.nullValidator]}],
      salaireMax: ['', { validators: [Validators.nullValidator]}],
      secteurs: ['', { validators: [Validators.nullValidator]}],
      competences: ['', { validators: [Validators.nullValidator]}],
      typePaiement: ['', { validators: [Validators.nullValidator]}] // par semaine, mois ou année
    });
  }

  formulaireDescriptionOffre() {
    this.descriptionOffreForm = this._formBuilder.group({
      description: ['', { validators: [Validators.nullValidator]}]
    });
  }

  formulariePaiement() {
    this.paimentForm = this._formBuilder.group({
      type: ['', { validators: [Validators.required]}],
      typeCarte: ['', { validators: [Validators.required]}],
      numeroCarte: ['', { validators: [Validators.required]}],
      moisExpiration: ['', { validators: [Validators.required]}],
      anneeExpiration: ['', { validators: [Validators.required]}],
      cryptogrmme: ['', { validators: [Validators.required]}],
      titulaireCarte: ['', { validators: [Validators.required]}],
    });
  }

  creerOffre() {

  }

  remplireDescription() {

  }
}
