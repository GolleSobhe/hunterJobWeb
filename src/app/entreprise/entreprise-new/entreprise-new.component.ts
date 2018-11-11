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

  formGroup: FormGroup;
  secteurActivites = ['Santé', 'Bancaire', 'Assurance', 'Hotelier', 'Aéronautique'];
  entreprise: Entreprise;

  constructor(private _formBuilder: FormBuilder,
              private entrepriseService: EntrepriseService, private router: Router) {
  }

  get formArray(): AbstractControl | null {
    return this.formGroup.get('formArray');
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          nom: ['', Validators.required],
          adresse: ['', Validators.required],
          telephone: ['', Validators.required],
          email: ['', Validators.email],
          siteWeb: ['', Validators.required]
        }),
        this._formBuilder.group({
          // logo: ['', Validators.nullValidator],
          secteurActivite: ['', Validators.required],
          description: ['', Validators.required]
        }),
      ])
    });
  }

  creerOuModifierEntreprise(value: any): void {

    /*
    nom: String;
    adresse: String;
    telelphone: String;
    mail: String;
    // logo: String;
    siteWeb: String;
    secteurActivite: String;
    description: String;
     */

    const entrepriseForm = this.formGroup.value.formArray[0];
    const entrepriseFormPart2 = this.formGroup.value.formArray[1];

    console.log(entrepriseForm, entrepriseFormPart2);

    const entreprise: Entreprise = {
      nom: entrepriseForm.nom,
      adresse: entrepriseForm.adresse,
      telephone: entrepriseForm.telephone,
      email: entrepriseForm.email,
      siteWeb: entrepriseForm.siteWeb,
      secteurActivite: entrepriseFormPart2.secteurActivite,
      description: entrepriseFormPart2.description
    };

    console.log(entreprise);

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

}
