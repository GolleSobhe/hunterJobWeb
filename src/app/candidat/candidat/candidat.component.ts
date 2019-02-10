import { Candidat } from './../candidat';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../candidat.service';
import { ProfilCandidat } from '../profilCandidat';

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
  constructor(private _formBuilder: FormBuilder,
        private router: ActivatedRoute,
        private routerToAccueil: Router,
        private candidatService: CandidatService) { }

  ngOnInit() {
    this.initCandidat();
  }

  private initCandidat(): void {
    this.router.params.subscribe(param => {
      this.candidatService.getCandidatById(param.id)
      .subscribe(candidat => {
        this.candidat = candidat;
        if (! this.candidat.profilCandidat ) {
          const profilCandidat: ProfilCandidat = {
            titreProfil: '',
            adresse: '',
            anneesExperiences: 0,
            anneesEtudes: 0,
            cv: '',
            typeEmploi: {
              cdi: false,
              cdd: false,
              freelance: false,
              professionnalisation: false,
              aprentissage: false,
              stage: false,
              interim: false},
            salaire: 10,
            relocalisation: false
          };
          this.candidat.profilCandidat = profilCandidat;
        }
        this.loaded = Promise.resolve(true);
        });
    });
  }

  edider(): void {
    this.isEdit = !this.isEdit;
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

}
