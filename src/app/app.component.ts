import {Component, OnInit} from '@angular/core';
import {EntrepriseService} from './services/entreprise.service';
import {Entreprise} from './models/countries';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EntrepriseService]
})
export class AppComponent implements OnInit {
  title = 'HUNTER JOB';

  listeEntreprises: Observable<Array<Entreprise>>;

  constructor(private entrepriseService: EntrepriseService) { }

  ngOnInit() {
    this.listeEntreprises = this.entrepriseService.getEntreprises();
  }
}
