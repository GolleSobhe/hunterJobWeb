import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import Entreprise from '../entreprise';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-entreprise-new',
  templateUrl: './entreprise-new.component.html',
  styleUrls: ['./entreprise-new.component.css']
})
export class EntrepriseNewComponent implements OnInit {

  formGroup: FormGroup;

  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  secteurActivites = ['Santé', 'Bancaire', 'Assurance', 'Hotelier', 'Aéronautique'];
 get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }
 
  constructor(private _formBuilder: FormBuilder,
    private entrepriseService: EntrepriseService) {
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          nomEntreprise: ['', Validators.required],
          adresseEntreprise: ['', Validators.required],
          telephoneEntreprise: ['', Validators.required],
          mailEntreprise: ['', Validators.email]
        }),
        this._formBuilder.group({
          logoEntreprise: ['', Validators.required],
          activiteEntreprise: ['', Validators.required],
          descriptionEntreprise: ['', Validators.required]
        }),
      ])
    });
  }

  creerOuModifierEntreprise(form: any): void {
    const entreprise = new Entreprise();
    this.entrepriseService.creerOuModifierEntreprise(entreprise)
    .subscribe(
      result => {

      },
      error => console.log(error)
      );
     console.log(form.value);
  }

}
