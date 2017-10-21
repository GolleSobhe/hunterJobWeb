import {Country} from '../../models/countries';
import * as countries from '../actions/countries';

export interface State {
  countriesList: Country[];
  selected: string | null;
}

export const initialState: State = {
  countriesList: [],
  selected: null
};

export function reducer(state = initialState, action: countries.Actions): State {
  switch (action.type) {
    case countries.ActionTypes.COUNTRIES_LOADED:
      return Object.assign({}, state, {countriesList: action.payload});

    default:
      return state;
  }
}

export const getCountriesList = state => state.countriesList;
export const getSelectedCountry = state => state.selected;
