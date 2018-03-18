import { Candidat } from './../candidat';
import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-candidat-list',
  templateUrl: './candidat-list.component.html',
  styleUrls: ['./candidat-list.component.css']
})
export class CandidatListComponent implements OnInit {

  candidats : Candidat[];

  constructor(private candidatService:CandidatService) { }

  ngOnInit() {
    this.candidatService.getAll()
    .subscribe(candidats => this.candidats = candidats);
  }

}
