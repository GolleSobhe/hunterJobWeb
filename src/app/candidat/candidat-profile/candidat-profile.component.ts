import { Component, OnInit } from '@angular/core';
import { Candidat } from '../candidat';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-candidat-profile',
  templateUrl: './candidat-profile.component.html',
  styleUrls: ['./candidat-profile.component.css']
})
export class CandidatProfileComponent implements OnInit {
  candidat: Candidat;
  constructor(private router: ActivatedRoute, private candidatService: CandidatService) { }

  ngOnInit() {
    this.initCandidat();
  }

  private initCandidat(): void {
    this.router.params.subscribe(param => {
      this.candidatService.getCandidatById(param.id)
      .subscribe(candidat => {
        this.candidat = candidat;
        });
    });
  }

}
