import { environment } from './../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Offre } from './offre';
import { MessageService } from '../common/message.service';

import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OffreService {

  private  ApiUrl = environment.apiUrl;

  constructor(private _http: HttpClient, private messageService: MessageService) {
  }

  getCompetences(): Observable<string[]> {
    return this._http.get<string[]>(`${this.ApiUrl}/offres/competences`);
  }

  creerOffre(entreprise_id: number, offre: Offre): Observable<Offre> {
    return this._http.post<Offre>(`${this.ApiUrl}/offres/?entreprise_id=${entreprise_id}`, offre, httpOptions);
  }

  creerOffreOtherProfession(entrprise_id: number, offre): Observable<any> {
    return this._http.post<Offre>(`${this.ApiUrl}/offres/?entreprise_id=entreprise_id/`, offre, httpOptions);
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

  //TODO: WAHOUUU METHODE A OPTIMISE
  getOfferByCityAndTitle(currentPage: number, pageSize: number, title?: string, city?: string): Observable<Offre[]> {

    if (title !== null && title !== null) {
      title = title.trim();
      city = city.trim();

      if (title.length > 0 && city.length > 0) {
        return this._http.get<Offre[]>(`${this.ApiUrl}/offres/filtrer?lieu=${city}&pageNumber=${currentPage}&pageSize=${pageSize}&titre=${title}`)
          .pipe(
            tap(_ => this.messageService.log(`search offer "${title} in "${city}"`)),
            catchError(this.messageService.handleError<Offre[]>('searchHeroes', []))
          );
      }

      if (city.length > 0) {
        return this._http.get<Offre[]>(`${this.ApiUrl}/offres/filtrer?lieu=${city}&pageNumber=${currentPage}&pageSize=${pageSize}`)
          .pipe(
            tap(_ => this.messageService.log(`search offer  "${city}"`)),
            catchError(this.messageService.handleError<Offre[]>('searchHeroes', []))
          );
      }

      if (title.length > 0) {
        return this._http.get<Offre[]>(`${this.ApiUrl}/offres/filtrer?pageNumber=${currentPage}&pageSize=${pageSize}&titre=${title}`)
          .pipe(
            tap(_ => this.messageService.log(`search offer "${title} in "${city}"`)),
            catchError(this.messageService.handleError<Offre[]>('searchHeroes', []))
          );
      } 
    }

    return this._http.get<Offre[]>(`${this.ApiUrl}/offres/?pageNumber=${currentPage}&pageSize=${pageSize}`)
    .pipe(
      tap(_ => this.messageService.log(`search offer "${title} in "${city}"`)),
      catchError(this.messageService.handleError<Offre[]>('searchHeroes', []))
    );
  }
}
