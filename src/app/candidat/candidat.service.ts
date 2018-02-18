import { Observable } from 'rxjs/Rx';
import { Candidat } from './candidat';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CandidatService {

  constructor(private http: HttpClient) {
  }

  create(candidat:Candidat):void{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post("api/candidat/create",candidat).subscribe();
  }

  getAll():Observable<Candidat[]> {
    return this.http.get<Candidat[]>("api/candidat").retry(3);
  }
}
