import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-entreprise-new',
  templateUrl: './entreprise-new.component.html',
  styleUrls: ['./entreprise-new.component.css']
})
export class EntrepriseNewComponent implements OnInit {
  isLinear = false;
  votreEntrepriseFormGroup: FormGroup;
  descriptionEntrepriseFormGroup: FormGroup;
  recapilatifEntrepriseFormGroup: FormGroup;
  secteurActiviteControl = new FormControl('', [Validators.required]);
  secteurActivites = ['Santé', 'Bancaire', 'Assurance', 'Hotelier', 'Aéronautique'];
  constructor(private _formBuilder: FormBuilder) {
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

  form1(): void {
    
  }

}
