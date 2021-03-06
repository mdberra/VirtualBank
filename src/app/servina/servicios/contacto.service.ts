import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Contacto } from '../model/contacto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
  
@Injectable({providedIn: 'root'})
export class ContactoService {
  private urlGCP: string = "http://35.243.241.239:5000";
  private url: string = "http://localhost:5000";
  
  private urlGetContacto: string = this.url + "/api/pepeya/";
  private urlPutContacto: string = this.url + "/api/pepeya/contacto";
  private urlImage: string = this.url + "/api/pepeya/image/";

  private idContacto: number;
  private contacto: Contacto;

  constructor( private httpClient: HttpClient ) {
  }
  public getEstadoDescripOptionsGeneral() {
    return this.httpClient.get(this.url + "/api/keyvalue/general");
  }
  public getEstadoDescripOptionsContacto() {
    return this.httpClient.get(this.url + "/api/keyvalue/contacto");
  }
  public getContactos() {
    return this.httpClient.get(this.urlGetContacto + "contactos");
  }
  public getContactoId() {
    return this.httpClient.get(this.urlGetContacto + "contacto/" + this.idContacto);
//                .pipe(map(res => res.json()));
  }
  public setContactoId(idContacto: number) {
    this.idContacto = idContacto;
  }
  public putContacto(c: Contacto): Observable<Contacto> {
    return this.httpClient.put<Contacto>(this.urlPutContacto, c, httpOptions);
  }

  public getImage(fileName: string) : Observable<Blob> {
    return this.httpClient.get(this.urlImage + fileName, { responseType: 'blob' });
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}