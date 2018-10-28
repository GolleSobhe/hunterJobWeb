import { environment } from './../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Competence, Offre, TypeContrat} from './offre';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Validators} from '@angular/forms';


@Injectable()
export class OffreService {

  private  ApiUrl = environment.apiUrl;  

  private _listeOffres: BehaviorSubject<Offre[]> = new BehaviorSubject<Offre[]>([]);
  listeOffres: Observable<Offre[]>;

  constructor(private _http: HttpClient) {
    this.listeOffres = this._listeOffres.asObservable();
  }

  modifierTableau(offres): void {
    this._listeOffres.next(offres);
  }

  getOffres(): Observable<Offre[]> {
    return this._http.get<Offre[]>(`${this.ApiUrl}/offres`);
  }

  creerOffre(offre: Offre): Observable<Offre> {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');

    const model = {
      titre: offre.titre,
      specialisation: offre.specialisation,
      // competences: string[];
      typeDesContrats: offre.typeDesContrats,
      anneesExperience: offre.anneesExperience,
      salaireParMois: offre.salaireParMois,
      lieu: offre.lieu,
      secteur: offre.secteur,
      description: offre.description
    };
    return this._http.post<Offre>(`${this.ApiUrl}/offres`, offre, {headers: headers});
  }

  creerOffreOtherProfession(offre: any): Observable<any> {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');


    return this._http.post<any>(`${this.ApiUrl}/offres`, offre, {headers: headers});
  }

  getOffre(id: number): Observable<Offre> {
    return this._http.get<Offre>(`${this.ApiUrl}/offres/${id}`);
  }

  /* METIERS */
  getProfessions(): Observable<any> {
    return this._http.get(`${this.ApiUrl}/metiers`);
  }

  getSpecialisation(): Observable<any> {
    return this._http.get(`${this.ApiUrl}/specialisation`);
  }

  getProduit(): Observable<any> {
    return this._http.get(`${this.ApiUrl}/produit`);
  }

  getCompetences(): Observable<Competence[]> {
    return this._http.get<Competence[]>(`${this.ApiUrl}/competences`);
  }

  getTypeContrat1(): Observable<any> {
    return this._http.get(`${this.ApiUrl}/typeContratV1`);
  }

  getTypeContrat2(): Observable<any> {
    return this._http.get(`${this.ApiUrl}/typeContratV1`);
  }

  getTypeContrat() {
    return this._http.get<TypeContrat[]>(`${this.ApiUrl}/typeContrat`);
  }

  getDomaine1(): Observable<any> {
    return this._http.get(`${this.ApiUrl}/domaine1`);
  }

  getDomaine2(): Observable<any> {
    return this._http.get(`${this.ApiUrl}/domaine2`);
  }

  getPays(): Observable<any> {
    return this._http.get(`${this.ApiUrl}/pays`);
  }
}
