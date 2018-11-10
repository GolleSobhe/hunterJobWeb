import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Offre, TypeContrat} from '../../offre';
import {OffreService} from '../../offre.service';
import {Router} from '@angular/router';
import {map, startWith} from 'rxjs/operators';
import {isNullOrUndefined} from 'util';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-others-profession',
  templateUrl: './others-profession.component.html',
  styleUrls: ['./others-profession.component.css']
})
export class OthersProfessionComponent implements OnInit, OnChanges {

  @Input() profession: string;

  isLinear = false;
  detailOffreForm: FormGroup;
  descriptionOffreForm: FormGroup;

  listeTypeContrat1: string [] = [];
  listeTypeContrat2: string[] = [];

  lieu: string;

  filteredStates: Observable<any[]>;
  stateCtrl: FormControl;
  states: any[] = [];

  constructor(private _formBuilder: FormBuilder, private router: Router,
              private offreService: OffreService) {
    this.getPays();
  }

  ngOnInit() {
    this.stateCtrl = new FormControl();

   this.formulaireDescriptionOffre();
   this.formulaireDetailOffre();
   this.getTypeContrat();
  }

  ngOnChanges() {

  }

  formulaireDetailOffre() {
    this.detailOffreForm = this._formBuilder.group({
      nomEntreprise: ['', {validators: [Validators.required]}],
      numeroTelephone: ['', {validators: [Validators.required]}],
      intitulePoste: ['', {validators: [Validators.required]}],
      ville: ['', {validators: [Validators.required]}],
      typeContrat: ['', {validators: [Validators.required]}],
      salaire: ['', {validators: [Validators.required]}],
      anneeExperience: ['', {validators: [Validators.required]}],
    });
  }

  formulaireDescriptionOffre() {
    this.descriptionOffreForm = this._formBuilder.group({
      description: ['', {validators: [Validators.required]}],
    });
  }

  getTypeContrat() {
    const typeContratKeys = Object.keys(TypeContrat)
      .filter(contrat => typeof TypeContrat[contrat as any] === 'number');

    const length = typeContratKeys.length;

    for (let i = 0; i < length; i++) {
      if (i < length / 2) {
        this.listeTypeContrat1.push(typeContratKeys[i]);
      } else {
        this.listeTypeContrat2.push(typeContratKeys[i]);
      }
    }
  }


  creerOffre() {
    const detailOffre = this.detailOffreForm.value;
    const descriptionOffre = this.descriptionOffreForm.value;

    const offre = {
      nomEntreprise: detailOffre.nomEntreprise,
      numeroTelephone: detailOffre.numeroTelephone,
      intitulePoste: detailOffre.intitulePoste,
      lieu: this.lieu,
      ville: detailOffre.ville,
      typeContrat: detailOffre.typeContrat,
      salaire: detailOffre.salaire,
      anneeExperience: detailOffre.anneeExperience,
      description: descriptionOffre.description
    };


    this.offreService.creerOffreOtherProfession(1, offre).subscribe(result => {
      this.router.navigate(['/accueil']);
    }, error => console.log(error));
  }

  private getPays(): void {
    this.offreService.getPays().subscribe(result => {
      this.states = result;
      this.stateCtrl = new FormControl();

      this.filteredStates = this.stateCtrl.valueChanges
        .pipe(
          startWith(''),
          map(state => state ? this.filterStates(state) : this.states.slice())
        );
    });
  }

  private filterStates(name: string) {
    if (name && name.trim() !== '') {
      const filterValue = name.toLowerCase();

      return this.states.filter(state =>
        state.name.toLowerCase().indexOf(filterValue) === 0);
    }
  }
}
