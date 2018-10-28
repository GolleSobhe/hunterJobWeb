import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Entreprise from './entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  private  ApiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCandidatsByEntreprise(): Observable<any[]> {
    return this.http.get<any[]>(`${this.ApiUrl}/candidatsByEntreprise`);
  }

  getAbonnementByEntreprise(): Observable<any> {
    return this.http.get<any>(`${this.ApiUrl}/abonnementByEntreprise`);
  }

  getOffresByEntreprise(): Observable<any[]> {
    return this.http.get<any[]>(`${this.ApiUrl}/offres`);
  }

  creerOuModifierEntreprise(entreprise: Entreprise): Observable<any> {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');
    return this.http.post<Entreprise>(`${this.ApiUrl}/entreprises`, entreprise, {headers: headers});
  }
}
