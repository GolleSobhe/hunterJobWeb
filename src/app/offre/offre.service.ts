import { environment } from './../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Offre } from './offre';

@Injectable()
export class OffreService {

  private  ApiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {
  }

  getCompetences(): Observable<string[]> {
    return this._http.get<string[]>(`${this.ApiUrl}/offre/competences`);
  }

  creerOffre(entreprise_id: number, offre: Offre): Observable<Offre> {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');

    return this._http.post<Offre>(`${this.ApiUrl}/offre/new?entreprise_id=${entreprise_id}`, offre, {headers: headers});
  }

  creerOffreOtherProfession(entrprise_id: number, offre): Observable<any> {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');

    return this._http.post<Offre>(`${this.ApiUrl}/offre/new?entreprise_id=entreprise_id`, offre, {headers: headers});
  }

  getProduit(): Observable<string[]> {
    return this._http.get<string[]>(`${this.ApiUrl}/offre/produits`);
  }

  getSpecialisations(): Observable<string[]> {
    return this._http.get<string[]>(`${this.ApiUrl}/offre/specialisations`);
  }

  getOffreById(id: number): Observable<Offre> {
    return this._http.get<Offre>(`${this.ApiUrl}/offre/${id}`);
  }

  getDomaines(): Observable<string[]> {
    return this._http.get<string[]>(`${this.ApiUrl}/offre/domaines`);
  }

  getPays(): Observable<any> {
    return this._http.get(`${this.ApiUrl}/pays`);
  }

  getAll(): Observable<Offre[]> {
    return this._http.get<Offre[]>(`${this.ApiUrl}/offre/all`);
  }

  getByPage(pageNumber: number, pageSize, specialisation?: string, contractType?: string): Observable<Offre[]> {
    pageNumber --;
    return this._http.get<Offre[]>(`${this.ApiUrl}/offre?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}
