import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {EntrepriseService} from '../entreprise.service';
import {Router} from '@angular/router';
import {Entreprise} from '../entreprise';

@Component({
  selector: 'app-entreprise-new',
  templateUrl: './entreprise-new.component.html',
  styleUrls: ['./entreprise-new.component.css']
})
export class EntrepriseNewComponent implements OnInit {

  entrepriseFormOne: FormGroup;
  entrepriseFormTwo: FormGroup;
  entrepriseFormThree: FormGroup;
  secteurActivites = ['Santé', 'Bancaire', 'Assurance', 'Hotelier', 'Aéronautique'];
  entreprise: Entreprise;

  constructor(private _formBuilder: FormBuilder,
        private entrepriseService: EntrepriseService,
        private router: Router) {
  }

  ngOnInit() {
    this.entrepriseFormOne = this._formBuilder.group({
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.email],
      siteWeb: ['', Validators.required]
    });
    this.entrepriseFormTwo = this._formBuilder.group({
      // logo: ['', Validators.nullValidator],
      secteurActivite: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.entrepriseFormThree = this._formBuilder.group({
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.email],
      siteWeb: ['', Validators.required],
      // logo: ['', Validators.nullValidator],
      secteurActivite: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  creerOuModifierEntreprise(entrepriseForm: any): void {
    const entreprise: Entreprise = {
      nom: entrepriseForm.nom,
      adresse: entrepriseForm.adresse,
      telephone: entrepriseForm.telephone,
      email: entrepriseForm.email,
      siteWeb: entrepriseForm.siteWeb,
      secteurActivite: entrepriseForm.secteurActivite,
      description: entrepriseForm.description
    };

    this.entrepriseService.creerEntreprise(entreprise).subscribe((entreprise_: Entreprise) => {
        // TODO RENVOYER L'UTILISATEUR DANS DANS SON COMPTE
          const id = entreprise_.id;
          this.entreprise = entreprise_;
          console.log(this.entreprise);
          this.router.navigate(['/accueil']);
        },
        error => console.log(error)
      );
  }

  goNext(step: number): void {
    switch (step) {
      case 0 : {
        const entrepriseStepOne = this.entrepriseFormOne.value;
        this.entrepriseFormThree.get('nom').setValue(entrepriseStepOne.nom);
        this.entrepriseFormThree.get('adresse').setValue(entrepriseStepOne.adresse);
        this.entrepriseFormThree.get('telephone').setValue(entrepriseStepOne.telephone);
        this.entrepriseFormThree.get('email').setValue(entrepriseStepOne.email);
        this.entrepriseFormThree.get('siteWeb').setValue(entrepriseStepOne.siteWeb);
        break;
      }
      case 1 : {
        const entrepriseStepTwo = this.entrepriseFormTwo.value;
        // this.entrepriseFormThree.get('logo').setValue(entrepriseStepTwo.logo);
        this.entrepriseFormThree.get('secteurActivite').setValue(entrepriseStepTwo.secteurActivite);
        this.entrepriseFormThree.get('description').setValue(entrepriseStepTwo.description);
        break;
      }
      default: break;
    }
  }

  goBack(step: number): void {
    switch (step) {
      case 0 : {
        const entrepriseStepOne = this.entrepriseFormThree.value;
        this.entrepriseFormOne.get('nom').setValue(entrepriseStepOne.nom);
        this.entrepriseFormOne.get('adresse').setValue(entrepriseStepOne.adresse);
        this.entrepriseFormOne.get('telephone').setValue(entrepriseStepOne.telephone);
        this.entrepriseFormOne.get('email').setValue(entrepriseStepOne.email);
        this.entrepriseFormOne.get('siteWeb').setValue(entrepriseStepOne.siteWeb);
        break;
      }
      case 1 : {
        const entrepriseStepTwo = this.entrepriseFormThree.value;
        // this.entrepriseFormTwo.get('logo').setValue(entrepriseStepTwo.logo);
        this.entrepriseFormTwo.get('secteurActivite').setValue(entrepriseStepTwo.secteurActivite);
        this.entrepriseFormTwo.get('description').setValue(entrepriseStepTwo.description);
        break;
      }
      default: break;
    }
  }
}
