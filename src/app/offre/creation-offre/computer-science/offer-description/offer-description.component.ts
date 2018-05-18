import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-offer-description',
  templateUrl: './offer-description.component.html',
  styleUrls: ['./offer-description.component.css']
})
export class OfferDescriptionComponent implements OnInit {

  labelPosition;

  filteredStates: Observable<any[]>;
  stateCtrl: FormControl;
  states;

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }

  ngOnInit() {
    this.initialiserTousLesPays();
  }

  private initialiserTousLesPays(): void {
    this.states = [
      {
        name: 'Guinée',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg'
      },
      {
        name: 'France',
        flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg'
      },
      {
        name: 'Sénégal',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg'
      },
      {
        name: 'Rwanda',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg'
      },
      {
        name: 'Ghana',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg'
      }
    ];
  }

  filterStates(name: string) {
    if (!isNullOrUndefined(name) && name.trim() !== '') {
      return this.states.filter(state =>
        state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
  }
}
