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
    return this.http.post<Candidat>(`${this.ApiUrl}/api/v1/candidats`, candidat, {headers: headers});
  }

  update(candidat: Candidat): Observable<Candidat> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<Candidat>(`${this.ApiUrl}/api/v1/candidats`, candidat, {headers: headers});
  }

  getCandidatById(id: number): Observable<Candidat> {
    return this.http.get<Candidat>(`${this.ApiUrl}/api/v1/candidats/${id}`);
  }

  getCandidats(): Observable<Array<Candidat>> {
    return this.http.get<Array<Candidat>>(`${this.ApiUrl}/api/v1/candidats`);
  }

  sendFileCv(id: number, file): Observable<any> {
    return this.http.post<any>(`${this.ApiUrl}/api/v1/candidats/${id}/cv`, file);
  }

  getFileCv(id: number): String {
    return `${this.ApiUrl}/api/v1/candidats/${id}/cv`;
  }

}
