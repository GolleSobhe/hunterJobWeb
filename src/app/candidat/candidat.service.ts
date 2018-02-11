import { Observable } from 'rxjs/Rx';
import { Candidat } from './candidat';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CandidatService {

  constructor(private http: HttpClient) {
  }

  create(candidat:Candidat):void{
    this.http.post("http://localhost:8080/candidat",candidat).subscribe();
  }

  getAll():Observable<Candidat[]> {
    return this.http.get<Candidat[]>("http://localhost:8080/candidat").retry(3);
  }
}
