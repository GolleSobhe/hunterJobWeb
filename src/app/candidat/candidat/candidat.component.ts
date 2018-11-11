import { Component, OnInit } from '@angular/core';
import { Candidat } from '../candidat';


@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  pdfSrc = '../../../assets/cvs/cv_abdoulaye.pdf';
  titreProfil = 'Etudes et développement des systèmes d\'information && Big Data';
  candidat: Candidat;
  constructor() { }

  ngOnInit() {

  }

}
