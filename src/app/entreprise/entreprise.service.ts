import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Entreprise from './entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http: HttpClient) { }

  getCandidatsByEntreprise(): Observable<any[]> {
    return this.http.get<any[]>('api/candidatsByEntreprise');
  }

  getAbonnementByEntreprise(): Observable<any> {
    return this.http.get<any>('api/abonnementByEntreprise');
  }

  getOffresByEntreprise(): Observable<any[]> {
    return this.http.get<any[]>('api/entreprises');
  }

  creerOuModifierEntreprise(entreprise: Entreprise): Observable<any> {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');
    return this.http.post<Entreprise>('api/entreprises', entreprise, {headers: headers});
  }
}
