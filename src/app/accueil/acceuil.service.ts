import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AcceuilService {

  constructor(private http: HttpClient) { }

  getKeyWords(): Observable<string[]> {
    return this.http.get<string[]>('api/keys-word');
  }

}
