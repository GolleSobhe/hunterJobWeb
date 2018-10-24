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
   this.candidat = new Candidat(1, 'BAH', 'Abdoulaye', '07000000', 'bah@hello.com',
   'carrefour pompidou', 3, 5, '../../../assets/cvs/cv_abdoulaye.pdf',
   'Full-Stack', 'Etudes et développement des systèmes d\'information && Big Data',
   ['CDI', 'CDD', 'Freelance'], true, 55);
  }

}
