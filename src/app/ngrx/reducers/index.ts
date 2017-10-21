import {ActionReducer, combineReducers} from '@ngrx/store';
import {createSelector} from 'reselect';

import * as fromRouter from '@ngrx/router-store';
import {environment} from '../../../environments/environment';

import {compose} from '@ngrx/core/compose';

import * as fromCountry from './countries';

export interface State {
  country: fromCountry.State;
  router: fromRouter.RouterState;
}

const reducers = {
  country: fromCountry.reducer,
  routerReducer: fromRouter.routerReducer
};

const developmentReducer: ActionReducer<State> = compose(combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const getRouterState = (state: State) => state.router;

export const getCountryState = (state: State) => state.country;
export const getCountryList = createSelector(getCountryState, fromCountry.getCountriesList);
export const getSelectedCountry = createSelector(getCountryState, fromCountry.getSelectedCountry);
