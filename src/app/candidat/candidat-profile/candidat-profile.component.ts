import { Component, OnInit } from '@angular/core';
import { Candidat } from '../candidat';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from '../candidat.service';
import { ProfilCandidat } from '../profilCandidat';

@Component({
  selector: 'app-candidat-profile',
  templateUrl: './candidat-profile.component.html',
  styleUrls: ['./candidat-profile.component.css']
})
export class CandidatProfileComponent implements OnInit {
  candidat: Candidat;
  loaded: Promise<boolean>;
  isEdit: Boolean = false;
  pdfSrc: String = './../../../assets/cvs/cv_abdoulaye.pdf';
  constructor(private router: ActivatedRoute, private candidatService: CandidatService) { }

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

  labelFn(value: number): string {
    return `${value} cm`;
  }

}
