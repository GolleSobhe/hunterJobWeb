import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  tousLesPays;

  states = [
    {
      name: 'Guinée',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg'
    },
    {
      name: 'France',
      flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg'
    },
    {
      name: 'Sénégal',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg'
    },
    {
      name: 'Rwanda',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg'
    },
    {
      name: 'Ghana',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg'
    }
  ];


  constructor() { }

  ngOnInit() {
    this.initialiserTousLesPays();
  }

  private initialiserTousLesPays(): void{
    this.tousLesPays = [{codePays: "225", nomPays: "Cote d'ivoire"},
    {codePays: "33", nomPays: "France"},
    {codePays: "224", nomPays: "Guinee"},
    {codePays: "245", nomPays: "Guinee-Bissau"},
    {codePays: "221", nomPays: "Senegal"}];
  }

}
