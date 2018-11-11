import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Candidat} from './candidat';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  private  ApiUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  creerCompte(candidat: Candidat): Observable<Candidat> {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');
    return this.http.post<Candidat>(`${this.ApiUrl}/candidat/new`, candidat, {headers: headers});
  }

  getCandidatById(id: number): Observable<Candidat> {
    return this.http.get<Candidat>(`${this.ApiUrl}/candidat/${id}`);
  }
}
