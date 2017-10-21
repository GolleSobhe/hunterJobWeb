import {Injectable} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import * as country from '../actions/countries';
import * as fromRoot from '../reducers';


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/debounceTime';
import {CountryService} from '../../common/services/countries';

@Injectable()
export class CountryEffect {

  constructor(private store: Store<fromRoot.State>, private countryService: CountryService, private actions$: Actions) {
  }

  @Effect()
  countryLoaded$: Observable<Action> = this.actions$
    .ofType(country.ActionTypes.LOAD_COUNTRIES)
    .switchMap((action) => this.countryService.getCountries()
      .map((countriesList) => new country.CountriesLoadedAction(countriesList)));
}
