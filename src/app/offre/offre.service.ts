import { environment } from './../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Offre } from './offre';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class OffreService {

  private  ApiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {
  }

  getCompetences(): Observable<string[]> {
    return this._http.get<string[]>(`${this.ApiUrl}/offres/competences`);
  }

  creerOffre(entreprise_id: number, offre: Offre): Observable<Offre> {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');

    return this._http.post<Offre>(`${this.ApiUrl}/offres/?entreprise_id=${entreprise_id}`, offre, {headers: headers});
  }

  creerOffreOtherProfession(entrprise_id: number, offre): Observable<any> {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');

    return this._http.post<Offre>(`${this.ApiUrl}/offres/?entreprise_id=entreprise_id/`, offre, {headers: headers});
  }

  getProduit(): Observable<string[]> {
    return this._http.get<string[]>(`${this.ApiUrl}/offres/produits/`);
  }

  getSpecialisations(): Observable<string[]> {
    return this._http.get<string[]>(`${this.ApiUrl}/offres/specialisations/`);
  }

  getOffreById(id: number): Observable<Offre> {
    return this._http.get<Offre>(`${this.ApiUrl}/offres/${id}/`);
  }

  getDomaines(): Observable<string[]> {
    return this._http.get<string[]>(`${this.ApiUrl}/offres/domaines/`);
  }

  getContractType(): Observable<string[]> {
    return this._http.get<string[]>(`${this.ApiUrl}/offres/typesContrat/`);
  }

  getPays(): Observable<any> {
    return this._http.get(`${this.ApiUrl}/pays/`);
  }

  getAll(): Observable<Offre[]> {
    return this._http.get<Offre[]>(`${this.ApiUrl}/offres/`);
  }

  getOfferByPage(currentPage: number, pageSize: number, specialisations?: string[], contractTypes?: string[], title?: string, city?: string): Observable<Offre[]> { 
    return this._http.get<Offre[]>(`${this.ApiUrl}/offres/?pageNumber=${currentPage}&pageSize=${pageSize}`);
  }
}
