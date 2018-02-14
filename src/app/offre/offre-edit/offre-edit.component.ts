import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OffreService} from '../offre.service';
import {Offre} from '../offre';

@Component({
  selector: 'app-offre-edit',
  templateUrl: './offre-edit.component.html',
  styleUrls: ['./offre-edit.component.css']
})
export class OffreEditComponent implements OnInit {

  offreForm: FormGroup;
  typeOffre = ['CDI', 'CDD', 'Stage'];

  constructor(private _formBuilder: FormBuilder, private _offreService: OffreService) {
    this.createOffreForm();
  }

  ngOnInit() {

  }

  /**
   * Formulaire dynamique permettant de créer une offre
   */
  createOffreForm(): void {
    this.offreForm = this._formBuilder.group({
      nom: ['', { validators: [Validators.required]}],
      typeOffre: ['', { validators: [Validators.required]}],
      titreOffre: ['', Validators.required],
      salaireMinimal: ['', { validators: [Validators.required, Validators.minLength(3)]}],
      salaireMaximal: ['', { validators: [Validators.required, Validators.minLength(3)]}],
      description: ['', { validators: [Validators.required]}]
    });
  }

  /**
   * Création d'une offre après avoir remplis le formulaire
   */
  creerOffre() {
    console.log(this.offreForm.value);
    this._offreService.creerOffre(this.offreForm.value).subscribe((result: Offre) => {
      console.log(result);
    }, error2 => console.log(error2));


   /*this._offreService.getOffre(1).subscribe((result: Offre) => {
     console.log(result);
   });*/
  }

  get diagnosticForm() {
    return JSON.stringify(this.offreForm.value);
  }
}
