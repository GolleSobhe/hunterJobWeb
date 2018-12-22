import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OffreService} from '../offre.service';

@Component({
  selector: 'app-creation-offre',
  templateUrl: './creation-offre.component.html',
  styleUrls: ['./creation-offre.component.css']
})
export class CreationOffreComponent implements OnInit {

  professions: string[];
  selectedProfession: string;

  constructor(private offreService: OffreService) {

  }

  ngOnInit() {

    this.professions = ['Informatique', 'Banque', 'Assurance', 'Hotellerie'];
    this.selectedProfession = this.professions[0];
    console.log(this.selectedProfession);
  }
}
