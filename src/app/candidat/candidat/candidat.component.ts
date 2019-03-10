import { Candidat } from './../candidat';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../candidat.service';

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

  onFileSelected() {
    const $pdf: any = document.querySelector('#id_load_file_candidat');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($pdf.files[0]);
    }
  }

  changeValue(event) {
    this.amount = event.value * 9;
  }

  enregister(): void {
    if(!this.isEdit){
      this.candidat.adresse = "pompidou";
      this.candidat.anneesEtudes = 5;
      this.candidat.anneesExperiences = 5;
      this.candidat.telephone = "568745899999";
      this.candidat.relocalisation = true;
      this.candidat.salaire = 50;
      this.candidat.titreProfil = "Full stack";
      this.candidatService.modifierCandidat(this.candidat).subscribe((candidat_: Candidat) => {
        this.candidat = candidat_;
        this.candidatForm.reset();
        //this.routerToAccueil.navigate(['/']);
      });
    }
  }

}
