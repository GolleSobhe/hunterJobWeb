import { Component, OnInit } from '@angular/core';
import {EntrepriseService} from '../entreprise.service';
import {Entreprise} from '../entreprise';

@Component({
  selector: 'app-entreprise-list',
  templateUrl: './entreprise-list.component.html',
  styleUrls: ['./entreprise-list.component.css']
})
export class EntrepriseListComponent implements OnInit {
  entreprises: Entreprise[];

  constructor(private entrepriseService: EntrepriseService) {}

  ngOnInit() {
    this.getEntreprises();
  }

  private getEntreprises(): void {
    this.entrepriseService.getEntreprises().subscribe((entrepriseList: Entreprise[]) => {
      this.entreprises = entrepriseList;
      console.log(this.entreprises);
    }, error => {
      console.log(error);
    });
  }
}
