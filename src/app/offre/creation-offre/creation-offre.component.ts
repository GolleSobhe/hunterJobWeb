import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OffreService} from '../offre.service';

@Component({
  selector: 'app-creation-offre',
  templateUrl: './creation-offre.component.html',
  styleUrls: ['./creation-offre.component.css']
})
export class CreationOffreComponent implements OnInit {

  professions: String[];
  selectedProfession: string;

  constructor(private offreService: OffreService) {

  }

  ngOnInit() {
    this.offreService.getProfessions().subscribe((professions: any) => {
      this.professions = professions;
      this.selectedProfession = undefined;
    }, error => console.log(error, 'Impossible de récuperer les métiers'));
  }
}
