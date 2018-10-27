import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Entreprise from '../entreprise';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-entreprise-new',
  templateUrl: './entreprise-new.component.html',
  styleUrls: ['./entreprise-new.component.css']
})
export class EntrepriseNewComponent implements OnInit {
  votreEntrepriseFormGroup: FormGroup;
  descriptionEntrepriseFormGroup: FormGroup;
  recapilatifEntrepriseFormGroup: FormGroup;
  secteurActiviteControl = new FormControl('', [Validators.required]);
  secteurActivites = ['Santé', 'Bancaire', 'Assurance', 'Hotelier', 'Aéronautique'];
  entreprise: Entreprise;
  constructor(private _formBuilder: FormBuilder,
    private entrepriseService: EntrepriseService) {
  }

  ngOnInit() {
    this.initValidatorsFormGroup();
  }

  private initValidatorsFormGroup(): void {
    this.votreEntrepriseFormGroup = this._formBuilder.group({
      nomEntrepriseCtrl: ['', Validators.required],
      adresseEntrepriseCtrl: ['', Validators.required],
      telephoneEntrepriseCtrl: ['', Validators.required],
      mailEntrepriseCtrl: ['', Validators.required]
    });
    this.descriptionEntrepriseFormGroup = this._formBuilder.group({
    });
    this.recapilatifEntrepriseFormGroup = this._formBuilder.group({
    });
  }

  creerEntreprise(form: any): void {
    const detailEntreprise = this.votreEntrepriseFormGroup.value;
    const descriptionEntreprise = this.descriptionEntrepriseFormGroup.value;
    console.log(detailEntreprise);
    console.log(descriptionEntreprise);
    this.entreprise.nomEntreprise = detailEntreprise.nomEntreprise;
    this.entreprise.adresseEntreprise = detailEntreprise.adresseEntreprise;
    this.entreprise.telephoneEntreprise = detailEntreprise.telephoneEntreprise;
    this.entreprise.mailEntreprise = detailEntreprise.mailEntreprise;
    this.entreprise.logoEntreprise = descriptionEntreprise.logoEntreprise;
    this.entreprise.secteurActivites = descriptionEntreprise.secteurActivites;
    this.entreprise.descriptionEntreprise = descriptionEntreprise.descriptionEntreprise;

    this.entrepriseService.creerOuModifierEntreprise(this.entreprise)
    .subscribe(
      result => {

      },
      error => console.log(error)
      );
  }

}
