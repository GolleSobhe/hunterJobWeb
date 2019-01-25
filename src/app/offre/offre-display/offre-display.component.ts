import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { Offre } from '../offre';
import { OffreService } from '../offre.service';
import { reject } from 'q';

@Component({
  selector: 'app-offre-display',
  templateUrl: './offre-display.component.html',
  styleUrls: ['./offre-display.component.css']
})
export class OffreDisplayComponent implements OnInit {

  offre: Offre;

  constructor(private activatedRoute: ActivatedRoute, private offreService: OffreService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(

      switchMap((params: ParamMap) =>
        this.offreService.getOffreById(parseInt(params.get('id'), 10))))
      .subscribe((offre: Offre) => {
        this.offre = offre;
      }, error => {
        reject(error);
      });
  }

}
