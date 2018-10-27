import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<any[]>('api/offres');
  }

  creerOuModifierEntreprise(entreprise: Entreprise): Observable<any> {
    return this.http.post('api/entreprise', entreprise);
  }
}
