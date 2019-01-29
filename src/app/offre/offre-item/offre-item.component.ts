import {Component, Input, OnInit} from '@angular/core';
import {Offre} from '../offre';

@Component({
  selector: 'app-offre-item',
  templateUrl: './offre-item.component.html',
  styleUrls: ['./offre-item.component.css']
})
export class OffreItemComponent implements OnInit {

  @Input()
  offre: any;
  entrepriseName: string;

  constructor() { }

  // TODO: sur le template remplace lieu par le nom de l'entreprise
  ngOnInit() {
    this.entrepriseName = this.offre.entreprise.nom;
  }

}
