import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OffreService} from '../../offre.service';
import {Observable} from 'rxjs/Observable';
import {map, startWith} from 'rxjs/operators';
import {isNullOrUndefined} from 'util';
import {Competence, Offre, TypeContrat} from '../../offre';
import {Router} from '@angular/router';

@Component({
  selector: 'app-computer-science',
  templateUrl: './computer-science.component.html',
  styleUrls: ['./computer-science.component.css']
})
export class ComputerScienceComponent implements OnInit {
  isLinear = false;
  detailOffreForm: FormGroup;
  descriptionOffreForm: FormGroup;
  paimentForm: FormGroup;

  lieu: string;

  filteredStates: Observable<any[]>;
  stateCtrl: FormControl;
  states: any[] = [];

  specialisation: string [] = [];
  produit: string [] = [];
  competences: Competence [] = [];
  domaine1: string [] = [];
  domaine2: string [] = [];

  skillsList: string[] = [];
  listeTypeContrat1: TypeContrat[] = [];
  listeTypeContrat2: TypeContrat[] = [];

  status: boolean = false;
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  status4: boolean = false;
  status5: boolean = false;
  status6: boolean = false;
  status7: boolean = false;
  status8: boolean = false;
  status9: boolean = false;
  status10: boolean = false;

  constructor(private _formBuilder: FormBuilder, private router: Router,
              private offreService: OffreService) {
    this.getPays();
  }

  ngOnInit() {
    this.stateCtrl = new FormControl();

    this.formulaireDetailOffre();
    this.formulaireDescriptionOffre();
    this.formulariePaiement();

    this.getProduit();
    this.getSpecialisation();
    this.getCompetences();
    this.getTypeContrat();
    this.getDomaine();
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

  getDomaine() {
    this.offreService.getDomaine1().subscribe(result => {
      this.domaine1 = result;
    });

    this.offreService.getDomaine2().subscribe(result => {
      this.domaine2 = result;
    });
  }

  getProduit() {
    this.offreService.getProduit().subscribe(result => {
      this.produit = result;
    });
  }

  getTypeContrat() {
    this.offreService.getTypeContrat().subscribe((contrats: TypeContrat[]) => {
      for (let i = 0; i < (contrats.length / 2); i++) {
        this.listeTypeContrat1.push(contrats[i]);
      }

      for (let i = (contrats.length / 2) ; i < contrats.length ; i++) {
        this.listeTypeContrat2.push(contrats[i]);
      }
    });
  }

  getCompetences() {
    this.offreService.getCompetences().subscribe((result: Competence[]) => {
      this.competences = result;
    });
  }

  getSpecialisation() {
    this.offreService.getSpecialisation().subscribe(result => {
      this.specialisation = result;
    });
  }

  formulaireDetailOffre() {
    this.detailOffreForm = this._formBuilder.group({
      titre: ['', {validators: [Validators.required]}],
      specialisation: ['', {validators: [Validators.required]}],
      // competences: ['', {validators: [Validators.required]}],
      typeDesContrats: ['', {validators: [Validators.required]}],
      anneesExperience: ['', {validators: [Validators.required]}],
      salaireParMois: ['', {validators: [Validators.required]}],
    });
  }

  formulaireDescriptionOffre() {
    this.descriptionOffreForm = this._formBuilder.group({
      secteur: ['', {validators: [Validators.required]}],
      description: ['', {validators: [Validators.required]}],
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
    const detailOffre = this.detailOffreForm.value;
    const descriptionOffre = this.descriptionOffreForm.value;

    const offre: Offre = {
      titre: detailOffre.titre,
      specialisation: detailOffre.specialisation,
      competences: this.skillsList,
      typeDesContrats: detailOffre.typeDesContrats,
      anneesExperience: detailOffre.anneesExperience,
      salaireParMois: detailOffre.salaireParMois,
      lieu: this.lieu,
      secteur: descriptionOffre.secteur,
      description: descriptionOffre.description
    };

    this.offreService.creerOffre(offre).subscribe(result => {
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
    if (!isNullOrUndefined(name) && name.trim() !== '') {
      const filterValue = name.toLowerCase();

      return this.states.filter(state =>
        state.name.toLowerCase().indexOf(filterValue) === 0);
    }
  }
}
