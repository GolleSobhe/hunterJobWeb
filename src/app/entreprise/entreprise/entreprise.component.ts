import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  entrepriseFormGroup: FormGroup;
  candidatsByEntreprise: Array<any> = [];
  offresByEntreprise:  Array<any> = [];
  abonnementByEntreprise: any = {};
  constructor(private entrepriseService: EntrepriseService) {}

  ngOnInit() {
    this.getCandidatsByEntreprise();
    this.getAbonnementByEntreprise();
    this.getOffresByEntreprise();
  }

  private getCandidatsByEntreprise(): void {
    this.entrepriseService.getCandidatsByEntreprise()
    .subscribe(data => {
      this.candidatsByEntreprise = data;
    });
  }

  private getAbonnementByEntreprise(): void {
    this.entrepriseService.getAbonnementByEntreprise()
    .subscribe(data => {
      this.abonnementByEntreprise = data[0];
    });
  }

  private getOffresByEntreprise(): void {
    this.entrepriseService.getOffresByEntreprise()
    .subscribe(data => {
      this.offresByEntreprise = data;
    });
  }

}
