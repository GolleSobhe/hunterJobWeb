import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AcceuilService {

  private  ApiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
getEnterprises(): Observable<any[]> {
  return this.http.get<any[]>(`${this.ApiUrl}/entreprises`);
}

}
