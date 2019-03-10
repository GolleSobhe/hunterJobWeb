import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Entreprise} from './entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  private  ApiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  creerEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');
    return this.http.post<Entreprise>(`${this.ApiUrl}/api/v1/entreprises`, entreprise, {headers: headers});
  }

  modifierEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');
    return this.http.put<Entreprise>(`${this.ApiUrl}/api/v1/entreprises`, entreprise, {headers: headers});
  }

  getEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(`${this.ApiUrl}/api/v1/entreprises`);
  }

  getEntrepriseById(id: number): Observable<Entreprise> {
    return this.http.get<Entreprise>(`${this.ApiUrl}/api/v1/entreprises/${id}`);
  }
}
