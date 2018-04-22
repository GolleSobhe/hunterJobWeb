import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  tousLesPays;
    
  
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
