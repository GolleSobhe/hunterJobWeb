import { CandidatService } from './../candidat.service';
import { Candidat } from './../candidat';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidat-new',
  templateUrl: './candidat-new.component.html',
  styleUrls: ['./candidat-new.component.css']
})
export class CandidatNewComponent implements OnInit {

  candidat:Candidat = new Candidat();

  constructor(private candidatService:CandidatService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.candidatService.create(this.candidat);
  }
}
