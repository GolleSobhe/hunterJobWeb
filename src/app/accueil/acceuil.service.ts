import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class AcceuilService {

  constructor(private http: HttpClient) { }
/** 
  getKeyWords(): Observable<string[]> {
    return this.http.get<string[]>('api/keys-word');
  }

  getTowns(): Observable<string[]> {
    return this.http.get<string[]>('api/towns');
  }
*/
getEnterprises(): Observable<any[]> {
  return this.http.get<any[]>('api/enterprises');
}

}
