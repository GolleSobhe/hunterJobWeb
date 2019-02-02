import { Candidat } from './../candidat';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../candidat.service';
import { TypeEmploi } from '../typeEmploi';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  isLinear = false;
  candidatEtape1FormGroup: FormGroup;
  candidatEtape2FormGroup: FormGroup;
  candidatEtape3FormGroup: FormGroup;
  candidat: Candidat;
  constructor(private _formBuilder: FormBuilder,
        private router: ActivatedRoute,
        private routerToAccueil: Router,
        private candidatService: CandidatService) { }

  ngOnInit() {
    this.candidatEtape1FormGroup = this._formBuilder.group({
      nom             : ['', [Validators.required]],
      prenom          : ['', [Validators.required]],
      email           : ['', [Validators.required, Validators.email]],
      telephone       : ['', [Validators.required]],
      adresse         : ['', [Validators.required]]
    });
    this.candidatEtape2FormGroup = this._formBuilder.group({
      titreProfil      : ['', [Validators.required]],
      anneesExperience : ['', [Validators.required]],
      anneesEtude      : ['', [Validators.required]],
      cv               : ['', [Validators.required]]
    });
    this.candidatEtape3FormGroup = this._formBuilder.group({
      cdi: [false],
      cdd: [false],
      freelance: [false],
      professionnalisation: [false],
      aprentissage: [false],    
      stage: [false],
      interim: [false],
      salaire: [false],
      relocalisation: [false]
    });
    this.initCandidat();
  }

  private initCandidat(): void {
    this.router.params.subscribe(param => {
      this.candidatService.getCandidatById(param.id)
      .subscribe(candidat => {
        this.candidat = candidat;
        this.candidatEtape1FormGroup.get('nom').setValue(this.candidat.nom);
        this.candidatEtape1FormGroup.get('prenom').setValue(this.candidat.prenom);
        this.candidatEtape1FormGroup.get('email').setValue(this.candidat.email);
        this.candidatEtape1FormGroup.get('telephone').setValue(this.candidat.telephone);
      });
    });
  }

  valider(): void {
    this.candidat.profilCandidat.adresse = this.candidatEtape1FormGroup.value.adresse;
    this.candidat.profilCandidat.titreProfil = this.candidatEtape2FormGroup.value.titreProfil;
    this.candidat.profilCandidat.anneesExperiences = this.candidatEtape2FormGroup.value.anneesExperience;
    this.candidat.profilCandidat.anneesEtudes = this.candidatEtape2FormGroup.value.anneesEtudes;
    this.candidat.profilCandidat.cv = this.candidatEtape2FormGroup.value.cv;
    const typeEmploi: TypeEmploi = {
      cdi: this.candidatEtape3FormGroup.value.cdi,
      cdd: this.candidatEtape3FormGroup.value.cdd,
      freelance: this.candidatEtape3FormGroup.value.freelance,
      professionnalisation: this.candidatEtape3FormGroup.value.professionnalisation,
      aprentissage: this.candidatEtape3FormGroup.value.aprentissage,      
      stage: this.candidatEtape3FormGroup.value.stage,
      interim: this.candidatEtape3FormGroup.value.interim
    };
    this.candidat.profilCandidat.typeEmploi = typeEmploi;
    this.candidat.profilCandidat.salaire = this.candidatEtape3FormGroup.value.salaire;
    this.candidat.profilCandidat.relocalisation = this.candidatEtape3FormGroup.value.relocalisation;
    this.candidatService.modifierCandidat(this.candidat)
    .subscribe((candidat_: Candidat) => {
      this.candidatEtape1FormGroup.reset();
      this.candidatEtape2FormGroup.reset();
      this.candidatEtape3FormGroup.reset();
      this.routerToAccueil.navigate(['/accueil']);
      });
  }
}
