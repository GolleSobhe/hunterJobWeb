import {type} from '../utils';
import {Action} from '@ngrx/store';
import {Country} from '../../models/countries';

export const ActionTypes = {
  LOAD_COUNTRIES: type('[COUNTRIES] LOAD'),
  COUNTRIES_LOADED: type('[COUNTRIES] LOADED'),
  SELECT_COUNTRY: type('[COUNTRY] SELECT')
};

export class LoadCountriesAction implements Action {
  type = ActionTypes.LOAD_COUNTRIES;

  constructor(public payload: any) {
  }
}

export class CountriesLoadedAction implements Action {
  type = ActionTypes.COUNTRIES_LOADED;

  constructor(public payload: Country[]) {
  }
}

export class SelectCountryAction implements Action {
  type = ActionTypes.SELECT_COUNTRY;

  constructor(public payload: Country) {
  }
}

export type Actions =
  | LoadCountriesAction
  | CountriesLoadedAction
  | SelectCountryAction
  ;
