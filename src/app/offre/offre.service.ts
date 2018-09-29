import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Competence, Offre} from './offre';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class OffreService {

  private _listeOffres: BehaviorSubject<Offre[]> = new BehaviorSubject<Offre[]>([]);
  listeOffres: Observable<Offre[]>;

  constructor(private _http: HttpClient) {
    this.listeOffres = this._listeOffres.asObservable();
  }

  modifierTableau(offres): void {
    this._listeOffres.next(offres);
  }

  getOffres(): Observable<Offre[]> {
    return this._http.get<Offre[]>('api/offres');
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

    return this._http.post<Offre>('api/offres', offre, {headers: headers});
  }

  getOffre(id: number): Observable<Offre> {
    return this._http.get<Offre>('api/offres/' + id);
  }

  /* METIERS */
  getProfessions(): Observable<any> {
    return this._http.get('api/metiers');
  }

  getSpecialisation(): Observable<any> {
    return this._http.get('api/specialisation');
  }

  getProduit(): Observable<any> {
    return this._http.get('api/produit');
  }

  getCompetences(): Observable<Competence[]> {
    return this._http.get<Competence[]>('api/competences');
  }

  getTypeContrat1(): Observable<any> {
    return this._http.get('api/typeContratV1');
  }

  getTypeContrat2(): Observable<any> {
    return this._http.get('api/typeContratV1');
  }

  getDomaine1(): Observable<any> {
    return this._http.get('api/domaine1');
  }

  getDomaine2(): Observable<any> {
    return this._http.get('api/domaine2');
  }

  getPays(): Observable<any> {
    return this._http.get('api/pays');
  }
}
