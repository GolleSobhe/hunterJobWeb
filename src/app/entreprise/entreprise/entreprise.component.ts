import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EntrepriseService } from '../entreprise.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/internal/operators';
import {Entreprise} from '../entreprise';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  entrepriseFormGroup: FormGroup;

  entreprise: Entreprise;

  constructor(private entrepriseService: EntrepriseService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getEntrepriseById();
  }

  private getEntrepriseById(): void {

    this.activatedRoute.paramMap.pipe(

      switchMap((params: ParamMap) =>
        this.entrepriseService.getEntrepriseById(parseInt(params.get('id'), 10))
      )).subscribe((entreprise: Entreprise) => {

      this.entreprise = entreprise;
      console.log(this.entreprise);
    }, error => console.log(error));
  }
}
