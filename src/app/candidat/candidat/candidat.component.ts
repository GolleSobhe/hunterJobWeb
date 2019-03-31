import { Candidat } from './../candidat';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../candidat.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  candidat: Candidat;
  loaded: Promise<boolean>;
  isEdit: Boolean = false;
  pdfSrc: String = null;
  amount: Number = 0;
  candidatForm: FormGroup;
  fileCV: File;
  constructor(private _formBuilder: FormBuilder,
        private router: ActivatedRoute,
        private routerToAccueil: Router,
        private candidatService: CandidatService) { }

  ngOnInit() {
    this.candidatForm = this._formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      titreProfil: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      anneesExperiences: ['', [Validators.required]],
      anneesEtudes: ['', [Validators.required]],
      salaire: ['', [Validators.required]],
      cdi: [false, Validators.required],
      cdd: [false, Validators.required],
      freelance: [false, Validators.required],
      professionnalisation: [false, Validators.required],
      aprentissage: [false, Validators.required],
      interim: [false, Validators.required],
      stage: [false, Validators.required],
      relocalisation: [false, Validators.required], 
    });
    this.initCandidat();
  }

  private initCandidat(): void {
    this.router.params.subscribe(param => {
      this.candidatService.getCandidatById(param.id)
      .subscribe(candidat => {
        this.candidat = candidat;
        this.candidat.salaire = 45;
        this.candidatForm.get('nom').setValue(this.candidat.nom);
        this.candidatForm.get('prenom').setValue(this.candidat.prenom);
        this.candidatForm.get('email').setValue(this.candidat.email);
        this.candidatForm.get('telephone').setValue(this.candidat.telephone);
        this.candidatForm.get('titreProfil').setValue(this.candidat.titreProfil);
        this.candidatForm.get('adresse').setValue(this.candidat.adresse);
        this.candidatForm.get('anneesExperiences').setValue(this.candidat.anneesExperiences);
        this.candidatForm.get('anneesEtudes').setValue(this.candidat.anneesEtudes);
        this.candidatForm.get('cdi').setValue(this.candidat.cdi);
        this.candidatForm.get('cdd').setValue(this.candidat.cdd);
        this.candidatForm.get('freelance').setValue(this.candidat.freelance);
        this.candidatForm.get('professionnalisation').setValue(this.candidat.professionnalisation);
        this.candidatForm.get('aprentissage').setValue(this.candidat.aprentissage);
        
        this.candidatForm.get('interim').setValue(this.candidat.interim);
        this.candidatForm.get('stage').setValue(this.candidat.stage);
        this.candidatForm.get('relocalisation').setValue(this.candidat.relocalisation);
        this.isEdit = this.activer(this.candidat);
        this.loaded = Promise.resolve(true);
        });
    });
  }

  edider(): void {
    this.isEdit = !this.isEdit;
  }

  activer(candidat: Candidat): boolean {
    return (candidat.adresse == null) || (candidat.anneesEtudes == null)
            || (candidat.anneesExperiences == null) || (candidat.salaire == null)
            || (candidat.telephone == null) || (candidat.titreProfil == null);
  }

  onFileSelected(event) {
    const $pdf: any = document.querySelector('#id_load_file_candidat');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($pdf.files[0]);
    }
    if(event.target.files && event.target.files.length > 0) {
      this.fileCV = event.target.files[0];
    }
  }

  changeValue(event) {
    this.amount = event.value * 9;
  }

  enregister(): void {
    if(!this.isEdit){
      this.candidat.adresse = "pompidou";
      this.candidat.anneesEtudes = 10;
      this.candidat.anneesExperiences = 5;
      this.candidat.telephone = "568745899999";
      this.candidat.relocalisation = true;
      this.candidat.salaire = 50;
      this.candidat.titreProfil = "Full stack";           
     const file: FormData = new FormData();
     file.append(`file`, this.fileCV);
     forkJoin(
       [this.candidatService.modifierCandidat(this.candidat)],
       [this.candidatService.sendFileCv(this.candidat.id, file)]
     ).subscribe(results => {
        console.log(results);
     });
  
    }
  }

}
