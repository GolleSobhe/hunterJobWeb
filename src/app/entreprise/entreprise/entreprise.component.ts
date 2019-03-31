import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EntrepriseService } from '../entreprise.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/internal/operators';
import {Entreprise} from '../entreprise';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  entrepriseForm: FormGroup;

  entreprise: Entreprise;

  secteurActivites = ['Santé', 'Bancaire', 'Assurance', 'Informatique', 'Hotelier', 'Aéronautique', 'Eaux', 'Mine'];

  constructor(private _formBuilder: FormBuilder, private entrepriseService: EntrepriseService, 
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.entrepriseForm = this._formBuilder.group({
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.email],
      siteWeb: ['', Validators.required],
      secteurActivite: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.getEntrepriseById();
  }

  private getEntrepriseById(): void {

    this.activatedRoute.paramMap.pipe(

      switchMap((params: ParamMap) =>
        this.entrepriseService.getEntrepriseById(parseInt(params.get('id'), 10))
      )).subscribe((entreprise: Entreprise) => {
      this.entreprise = entreprise;
      this.entrepriseForm.get('nom').setValue(this.entreprise.nom);
      this.entrepriseForm.get('adresse').setValue(this.entreprise.adresse);
      this.entrepriseForm.get('telephone').setValue(this.entreprise.telephone);
      this.entrepriseForm.get('email').setValue(this.entreprise.email);
      this.entrepriseForm.get('siteWeb').setValue(this.entreprise.siteWeb);
      // this.entrepriseForm.get('logo').setValue(this.entreprise.logo);
      this.entrepriseForm.get('secteurActivite').setValue(this.entreprise.secteurActivite);
      this.entrepriseForm.get('description').setValue(this.entreprise.description);

    }, error => console.log(error));
  }

  modifierEntreprise(entrepriseForm: any): void {
    const entreprise: Entreprise = {
      nom: entrepriseForm.nom,
      adresse: entrepriseForm.adresse,
      telephone: entrepriseForm.telephone,
      email: entrepriseForm.email,
      siteWeb: entrepriseForm.siteWeb,
      secteurActivite: entrepriseForm.secteurActivite,
      description: entrepriseForm.description
    };

    this.entrepriseService.modifierEntreprise(entreprise).subscribe((entreprise_: Entreprise) => {
          this.entreprise = entreprise_;
        },
        error => console.log(error)
      );
  }
}
