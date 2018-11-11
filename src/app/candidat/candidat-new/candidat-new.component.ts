import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CandidatService} from '../candidat.service';
import {Candidat} from '../candidat';
import {Router} from '@angular/router';

@Component({
  selector: 'app-candidat-new',
  templateUrl: './candidat-new.component.html',
  styleUrls: ['./candidat-new.component.css']
})
export class CandidatNewComponent implements OnInit {

  candidatForm: FormGroup;
  candidat: Candidat;

  constructor(private _formBuilder: FormBuilder,
              private candidatService: CandidatService,
              private router: Router) { }

  ngOnInit() {
    this.formulaireCreationCompte();
  }

  formulaireCreationCompte() {
    this.candidatForm = this._formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]]
    });
  }

  creerCompte() {
    const candidat: Candidat = this.candidatForm.value;

    console.log(candidat);
    this.candidatService.creerCompte(candidat).subscribe((candidat_: Candidat) => {
      this.candidat = candidat_;
      this.candidatForm.reset();
      this.router.navigate(['/accueil']);
      });
  }

}
