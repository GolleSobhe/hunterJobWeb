import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-creation-entreprise',
  templateUrl: './creation-entreprise.component.html',
  styleUrls: ['./creation-entreprise.component.css']
})
export class CreationEntrepriseComponent implements OnInit {
  isLinear = false;
  votreEntrepriseFormGroup: FormGroup;
  descriptionEntrepriseFormGroup: FormGroup;
  recapilatifEntrepriseFormGroup: FormGroup;
  secteurActiviteControl = new FormControl('', [Validators.required]);
  secteurActivites = ['Santé', 'Bancaire', 'Assurance', 'Hotelier', 'Aéronautique'];
  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.votreEntrepriseFormGroup = this._formBuilder.group({
    });
    this.descriptionEntrepriseFormGroup = this._formBuilder.group({
    });
    this.recapilatifEntrepriseFormGroup = this._formBuilder.group({
    });
  }

}
