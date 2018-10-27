import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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
}
