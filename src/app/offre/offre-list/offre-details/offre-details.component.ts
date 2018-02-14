import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Offre} from '../../offre';
import {OffreService} from '../../offre.service';

@Component({
  selector: 'app-offre-details',
  templateUrl: './offre-details.component.html',
  styleUrls: ['./offre-details.component.css']
})
export class OffreDetailsComponent implements OnInit {

  idOffre: number;
  offreSelectionnee: Offre;
  afficher: boolean;

  constructor(private activateRoute: ActivatedRoute, private offreService: OffreService) { }

  ngOnInit() {

    this.activateRoute.params.subscribe((params: Params) => {

      if (parseInt(params.id, 10)) {
        this.idOffre = parseInt(params.id, 10);

        this.getOffre(this.idOffre);
      } else {
        // TODO: il faut gérer cette erreur (riderection oubien affichage)
        alert('Offre non défini');
      }
    });
  }

  getOffre(idOffre: number): void {
    this.offreService.getOffre(idOffre).subscribe((offre: Offre) => {
      this.offreSelectionnee = offre;
      this.afficher = true;
    }, error2 => console.log('Offre non défini') );
  }

}
