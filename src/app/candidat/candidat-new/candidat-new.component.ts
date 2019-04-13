import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CandidatService} from '../candidat.service';
import {Utilisateur} from '../candidat';
import {Router} from '@angular/router';

@Component({
  selector: 'app-candidat-new',
  templateUrl: './candidat-new.component.html',
  styleUrls: ['./candidat-new.component.css']
})
export class CandidatNewComponent implements OnInit {

  candidatForm: FormGroup;
  utilisateur: Utilisateur;

  constructor(private _formBuilder: FormBuilder,
              private candidatService: CandidatService,
              private routerToCandidat: Router) { }

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

  create(utilisateur: Utilisateur) {
    this.candidatService.signUp(utilisateur).subscribe((utilisateur_: Utilisateur) => {
      this.utilisateur = utilisateur_;
      this.candidatForm.reset();
      this.routerToCandidat.navigate(['/candidats/' + this.utilisateur.id]);
      });
  }

}
