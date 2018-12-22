import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Candidat} from './candidat';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  // private  ApiUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  creerCompte(candidat: Candidat): Observable<Candidat> {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');
    // return this.http.post<Candidat>(`${this.ApiUrl}/candidats`, candidat, {headers: headers});
    return this.http.post<Candidat>(`http://localhost:3000/candidats`, candidat, {headers: headers});
  }

  getCandidatById(id: number): Observable<Candidat> {
    return this.http.get<Candidat>(`http://localhost:3000/candidats/${id}`);
  }

  modifierCandidat(candidat: Candidat): Observable<Candidat> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const id = candidat.id;
    return this.http.put<Candidat>(`http://localhost:3000/candidats/${id}`, candidat, {headers: headers});
  }
}
