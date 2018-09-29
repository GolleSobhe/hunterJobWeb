import { Candidat } from './../candidat';
import { Component, OnInit, Input } from '@angular/core';
import { CandidatService } from '../candidat.service';
import {ParamMap, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {

  @Input() candidat: Candidat;

  constructor(private route: ActivatedRoute, private candidatService:CandidatService) { 
    this.route.paramMap
    .switchMap((params:ParamMap) => {
      return this.candidatService.getCandidat(+params.get('id'));
    }).subscribe(candidat => this.candidat = candidat);
  }

  ngOnInit() {
  }

}
