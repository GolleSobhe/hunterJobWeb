import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import {Http} from '@angular/http';
import {Country} from '../../models/countries';

@Injectable()
export class CountryService {

  constructor(private http: Http) {
  }

  getCountries(): Observable<Country[]> {
    return this.http.get('')
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
