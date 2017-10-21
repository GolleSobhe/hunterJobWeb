import { Component, OnInit } from '@angular/core';

import * as country from '../../ngrx/actions/countries';
import * as globalReducer from '../../ngrx/reducers';
import {Observable} from 'rxjs/Observable';
import {Country} from '../../models/countries';
import {Store} from '@ngrx/store';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries: Observable<Country[]>;
  constructor(private store: Store<globalReducer.State>) { }

  ngOnInit() {
    this.store.dispatch(new country.LoadCountriesAction({}));
    this.countries = this.store.select(globalReducer.getCountryList);
  }

}
