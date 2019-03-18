import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Utilisateur} from './candidat';
import {environment} from '../../environments/environment';
import { MessageService } from '../common/message.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  private  ApiUrl: string;

  constructor(private http: HttpClient,  private messageService: MessageService) {
    this.ApiUrl = environment.apiUrl + '/candidats/';
   }

  signUp(user: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.ApiUrl}`, user, httpOptions).pipe(
      tap((newUser: Utilisateur) => this.messageService.log(`added user id =${newUser.id}`)),
      catchError(this.messageService.handleError<Utilisateur>('new user'))
    );
  } 

  signIn(): void {

  }

  getCandidatById(id: number): Observable<any> {
    return of([]);
  }

  creerCompte(candidat: any): Observable<any> {
    return of([]);

  }

}
