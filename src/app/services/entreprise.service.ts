import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Entreprise} from '../models/countries';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EntrepriseService {

  constructor(private http: HttpClient) {
  }

  getEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>('http://localhost:8080/entreprises');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
