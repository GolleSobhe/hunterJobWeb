import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Offre} from './offre';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class OffreService {

  private _listeOffres: BehaviorSubject<Offre[]> = new BehaviorSubject<Offre[]>([]);
  listeOffres: Observable<Offre[]>;

  constructor(private _http: HttpClient) {
    this.listeOffres = this._listeOffres.asObservable();
  }

  modifierTableau(offres): void {
    this._listeOffres.next(offres);
  }

  getOffres(): Observable<Offre[]> {
    return this._http.get<Offre[]>('api/offres');
  }

  creerOffre(form: Offre): Observable<Offre> {
    const headers = new HttpHeaders();
    const offre = JSON.stringify(form);

    headers.append('Content-Type', 'application/json');

    return this._http.post<Offre>('api/offres/create', offre, {headers: headers});
  }

  getOffre(id: number): Observable<Offre> {
    return this._http.get<Offre>('api/offres/' + id);
  }

}
