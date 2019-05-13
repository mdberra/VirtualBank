import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Delegacion } from '../model/delegacion';
import { Banco } from '../model/banco';
import { DiasCobro } from '../model/diasCobro';

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
  private urlPutDelegacion: string = this.url + "/api/servina/delegacion";
  private idDelegacion: number;
  private delegacion: Delegacion;
0
  private urlGetBanco: string = this.url + "/api/servina/banco/";
  private urlGetBancos: string = this.url + "/api/servina/bancos";
  private urlPutBanco: string = this.url + "/api/servina/banco";
  private idBanco: number;

  private urlGetDiasCobro: string = this.url + "/api/servina/diasCobro/";   //idDelegacion
  private urlPostDiasCobro: string = this.url + "/api/servina/diasCobro";
  private urlDeleteDiasCobro: string = this.url + "/api/servina/diasCobro/"; //idDiasCobro
  private urlDelDiasCobro: string = this.url + "/api/servina/diasCobro/"; //idDiasCobro
  private idDiasCobro: number;
  private diasCobro: DiasCobro;

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
  public putDelegacion(d: Delegacion): Observable<Delegacion> {
    return this.httpClient.put<Delegacion>(this.urlPutDelegacion, d, httpOptions);
  }
  public getBancoId() {
    return this.httpClient.get(this.urlGetBanco + this.idBanco);
  }
  public setBancoId(idBanco: number) {
    this.idBanco = idBanco;
  }

  public getDiasCobroDelegacion() {
    return this.httpClient.get(this.urlGetDiasCobro + this.idDelegacion);
  }
  public setDiasCobroId(idDiasCobro: number) {
    this.idDiasCobro = idDiasCobro;
  }
  public postDiasCobro(fecha: String): Observable<DiasCobro> {
    this.diasCobro = new DiasCobro(0, this.idDelegacion, fecha);
    return this.httpClient.post<DiasCobro>(this.urlPostDiasCobro, this.diasCobro, httpOptions);
//    .pipe(
//      tap((dc: DiasCobro) => {
//        console.log("post exitoso " + dc);
//      }),
//      catchError(this.handleError('postDiasCobro', this.diasCobro))
//    );
  }
  public deleteDiasCobro(id: number) {
    console.log(id);
    return this.httpClient.delete<DiasCobro>(this.urlDelDiasCobro + id, httpOptions);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}