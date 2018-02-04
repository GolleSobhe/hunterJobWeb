import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  getUtilisateurs() {
    return this.http.get('');
  }

}
