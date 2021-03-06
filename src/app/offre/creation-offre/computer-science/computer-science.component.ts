import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {OffreService} from '../../offre.service';
import {Observable} from 'rxjs/Observable';
import {map, startWith} from 'rxjs/operators';
import {Offre, TypeContrat} from '../../offre';
import {Router} from '@angular/router';
import {ErrorStateMatcher, MatDialog} from '@angular/material';
import {AppercuComponent} from './appercu/appercu.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-computer-science',
  templateUrl: './computer-science.component.html',
  styleUrls: ['./computer-science.component.css']
})
export class ComputerScienceComponent implements OnInit {
  isLinear = true;
  submittedNext = false;
  submittedFormNext = false;
  descriptionMaxLength = 800;
  descriptionMinLength = 20;

  detailOffreForm: FormGroup;
  descriptionOffreForm: FormGroup;
  paimentForm: FormGroup;

  filteredStates: Observable<any[]>;
  stateCtrl: FormControl;
  states: any[] = [
    {
      'name': 'Guinée',
      'flag': 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg'
    },
    {
      'name': 'France',
      'flag': 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg'
    },
    {
      'name': 'Sénégal',
      'flag': 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg'
    },
    {
      'name': 'Rwanda',
      'flag': 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg'
    },
    {
      'name': 'Ghana',
      'flag': 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg'
    },
    {
      name: 'Arkansas',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  specialisations: string [] = [];
  produit: string [] = [];
  competences: string [] = [];
  domaine1: string [] = [];
  domaine2: string [] = [];

  skillsList: string[] = [];
  listeTypeContrat1: string [] = [];
  listeTypeContrat2: string[] = [];

  status = false;
  status1 = false;
  status2 = false;
  status3 = false;
  status4 = false;
  status5 = false;
  status6 = false;
  status7 = false;
  status8 = false;
  status9 = false;
  status10 = false;

  matcher: MyErrorStateMatcher;

  constructor(private _formBuilder: FormBuilder, private router: Router,
              private offreService: OffreService, public dialog: MatDialog) {
    this.getPays();
  }

  get titre() {
    return this.detailOffreForm.get('titre');
  }

  get specialisation() {
    return this.detailOffreForm.get('specialisation');
  }

  get typeDesContrats() {
    return this.detailOffreForm.get('typeDesContrats');
  }

  get anneesExperience() {
    return this.detailOffreForm.get('anneesExperience');
  }

  get salaireParMois() {
    return this.detailOffreForm.get('salaireParMois');
  }

  get secteur() {
    return this.descriptionOffreForm.get('secteur');
  }

  get description() {
    return this.descriptionOffreForm.get('description');
  }

  get lieu() {
    return this.descriptionOffreForm.get('lieu');
  }

  ngOnInit() {

    this.formulaireDetailOffre();
    this.formulaireDescriptionOffre();
    this.formulariePaiement();

    this.getProduit();
    this.getSpecialisations();
    this.getTypeContrat();
    this.getDomaines();

    this.matcher = new MyErrorStateMatcher();
  }

  clickEvent(id: number, name: string) {
    switch (id) {
      case 1:
        this.status1 = !this.status1;
        this.status = this.status1;
        break;

      case 2:
        this.status2 = !this.status2;
        this.status = this.status2;
        break;

      case 3:
        this.status3 = !this.status3;
        this.status = this.status3;
        break;

      case 4:
        this.status4 = !this.status4;
        this.status = this.status4;
        break;

      case 5:
        this.status5 = !this.status5;
        this.status = this.status5;
        break;

      case 6:
        this.status6 = !this.status6;
        this.status = this.status6;
        break;

      case 7:
        this.status7 = !this.status7;
        this.status = this.status7;
        break;

      case 8:
        this.status8 = !this.status8;
        this.status = this.status8;
        break;

      case 9:
        this.status9 = !this.status9;
        this.status = this.status9;
        break;

      case 10:
        this.status10 = !this.status10;
        this.status = this.status10;
        break;
    }

    if (this.status) {
      this.addElement(name);
    } else {
      this.deleteElement(name);
    }
  }

  resetSelectSkills() {
    this.status = this.status1 = this.status2 = this.status3 = this.status4 = this.status5
      = this.status6 = this.status7 = this.status8 = this.status9 = this.status10 = false;
  }

  deleteElement(name: string): void {
    const index = this.skillsList.indexOf(name);

    this.skillsList = this.skillsList.filter((skill, i) => i !== index);
  }

  addElement(name: string): void {
    const skills = [...this.skillsList];
    skills.push(name);
    this.skillsList = skills;
  }

  getDomaines() {
    this.offreService.getDomaines().subscribe((domaines: string[]) => {

      for (let i = 0; i < domaines.length; i++) {
        if (i < domaines.length / 2) {
          this.domaine1.push(domaines[i]);
        } else {
          this.domaine2.push(domaines[i]);
        }
      }
    }, error => console.log(error));
  }

  getProduit() {
    this.offreService.getProduit().subscribe(result => {
      this.produit = result;
    }, error => console.log(error));
  }

  getTypeContrat() {
    const typeContratKeys = Object.keys(TypeContrat)
      .filter(contrat => typeof TypeContrat[contrat as any] === 'number');

    for (let i = 0; i < typeContratKeys.length / 2; i++) {
      this.listeTypeContrat1.push(typeContratKeys[i]);
    }

    for (let i = 3; i < typeContratKeys.length; i++) {
      this.listeTypeContrat2.push(typeContratKeys[i]);
    }
  }

  getSpecialisations() {
    this.offreService.getSpecialisations().subscribe(result => {
      this.specialisations = result;
    }, error => console.log(error));
  }

  formulaireDetailOffre() {
    this.detailOffreForm = this._formBuilder.group({
      // TODO Fixer la tailler minimale du titre
      titre: ['', [Validators.required, Validators.minLength(2)]],
      specialisation: ['', [Validators.required]],
      typeDesContrats: ['', [Validators.required]],
      anneesExperience: ['', [Validators.required, Validators.min(0), Validators.max(30)]],
      salaireParMois: ['', [Validators.required, Validators.min(100000), Validators.max(500000)]],
      competences: ['', [Validators.nullValidator]]
    });
  }

  formulaireDescriptionOffre() {
    this.descriptionOffreForm = this._formBuilder.group({
      secteur: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(this.descriptionMinLength),
        Validators.maxLength(this.descriptionMaxLength)]],
      lieu: ['', [Validators.required]]
    });
  }

  formulariePaiement() {
    this.paimentForm = this._formBuilder.group({
      type: ['', {validators: [Validators.required]}],
      typeCarte: ['', {validators: [Validators.required]}],
      numeroCarte: ['', {validators: [Validators.required]}],
      moisExpiration: ['', {validators: [Validators.required]}],
      anneeExpiration: ['', {validators: [Validators.required]}],
      cryptogrmme: ['', {validators: [Validators.required]}],
      titulaireCarte: ['', {validators: [Validators.required]}],
    });
  }

  creerOffre() {
    this.detailOffreForm.patchValue({competences: this.skillsList});

    const detailOffre = this.detailOffreForm.value;
    const descriptionOffre = this.descriptionOffreForm.value;

    const offre: Offre = {
      titre: detailOffre.titre,
      specialisation: detailOffre.specialisation,
      competences: detailOffre.competences,
      type: detailOffre.typeDesContrats,
      anneesExperience: detailOffre.anneesExperience,
      salaire: detailOffre.salaireParMois,
      lieu: descriptionOffre.lieu,
      secteurActivite: descriptionOffre.secteur,
      description: descriptionOffre.description
    };

    this.offreService.creerOffre(1, offre).subscribe(result => {
      this.router.navigate(['/accueil']); // TODO: redirection vers user compte
    }, error => console.log(error));
  }

  // TODO modifier cette méthode quand le back fournira les pays
  private getPays(): void {
    this.stateCtrl = new FormControl();

    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );


    /*this.offreService.getPays().subscribe(result => {
      this.states = result;

      console.log(this.states);

      this.stateCtrl = new FormControl();

      this.filteredStates = this.stateCtrl.valueChanges
        .pipe(
          startWith(''),
          map(state => state ? this.filterStates(state) : this.states.slice())
        );
    });*/
  }

  private filterStates(name: string) {
    if (name && name.trim() !== '') {
      const filterValue = name.toLowerCase();

      return this.states.filter(state =>
        state.name.toLowerCase().indexOf(filterValue) === 0);
    }
  }

  openDialog(): void {
    this.detailOffreForm.patchValue({competences: this.skillsList});

    const dialogRef = this.dialog.open(AppercuComponent, {

      data: {detailOffre: this.detailOffreForm.value, descriptionOffre: this.descriptionOffreForm.value}
    });

    dialogRef.afterClosed().subscribe(result => {

      // TODO verifier la validité des données et payer à partir d'ici
      console.log(result, 'The dialog was closed');

    });
  }
}


