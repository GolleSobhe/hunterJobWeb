import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import Entreprise from '../entreprise';
import { EntrepriseService } from '../entreprise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entreprise-new',
  templateUrl: './entreprise-new.component.html',
  styleUrls: ['./entreprise-new.component.css']
})
export class EntrepriseNewComponent implements OnInit {

  formGroup: FormGroup;
  secteurActivites = ['Santé', 'Bancaire', 'Assurance', 'Hotelier', 'Aéronautique'];
 get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }
 
  constructor(private _formBuilder: FormBuilder,
    private entrepriseService: EntrepriseService, private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          nomEntreprise: ['', Validators.required],
          adresseEntreprise: ['', Validators.required],
          telephoneEntreprise: ['', Validators.required],
          mailEntreprise: ['', Validators.email],
          urlEntreprise: ['', Validators.required]
        }),
        this._formBuilder.group({
          logoEntreprise: ['', Validators.required],
          activiteEntreprise: ['', Validators.required],
          descriptionEntreprise: ['', Validators.required]
        }),
      ])
    });
  }

  creerOuModifierEntreprise(value: any): void {
    const entreprise = new Entreprise();
    entreprise.nomEntreprise = value.formArray[0].nomEntreprise ;
    entreprise.adresseEntreprise =  value.formArray[0].adresseEntreprise;
    entreprise.telephoneEntreprise = value.formArray[0].telephoneEntreprise;
    entreprise.mailEntreprise = value.formArray[0].mailEntreprise;
    entreprise.urlEntreprise = value.formArray[0].urlEntreprise;
    entreprise.logoEntreprise =  value.formArray[1].logoEntreprise;
    entreprise.secteurActivites = value.formArray[1].secteurActivites;
    entreprise.descriptionEntreprise =  value.formArray[1].descriptionEntreprise;
    this.entrepriseService.creerOuModifierEntreprise(entreprise)
    .subscribe(
      result => {
        this.router.navigate(['/entreprises/entreprise']);
      },
      error => console.log(error)
      );
  }

}
