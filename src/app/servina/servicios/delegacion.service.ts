import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Delegaciones } from '../model/delegaciones';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
  
@Injectable({providedIn: 'root'})
export class DelegacionService {
  private urlGCP: string = "http://35.243.241.239:5000";
  private url: string = "http://localhost:5000";
  
  private urlGetDelegacion: string = this.url + "/api/servina/delegacion/";
  private urlGetDelegaciones: string = this.url + "/api/servina/delegaciones";
  //private urlPutDelegacion: string = this.url + "/api/pepeya/contacto";

  private idDelegacion: number;
  private delegaciones: Delegaciones;

  constructor( private httpClient: HttpClient ) {
  }
  public getDelegaciones() {
    return this.httpClient.get(this.urlGetDelegaciones);
  }
  public getDelegacionId() {
    return this.httpClient.get(this.urlGetDelegacion + this.idDelegacion);
//                .pipe(map(res => res.json()));
  }
  public setDelegacionId(idDelegacion: number) {
    this.idDelegacion = idDelegacion;
  }
}