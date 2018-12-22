import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Entreprise} from '../entreprise/entreprise';


@Injectable()
export class AcceuilService {

  private  ApiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

}
