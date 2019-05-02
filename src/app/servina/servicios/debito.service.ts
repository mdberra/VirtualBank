import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Debito } from '../model/debito';
  
@Injectable({providedIn: 'root'})
export class DebitoService {
    private baseUrl: string = "http://localhost:5000/api/servina";

    public deb: Debito;
    private debs: Debito[];

    constructor( private httpClient: HttpClient ) {
    }
    getDebitos(idCliente: number) {
        return this.httpClient.get(this.baseUrl + "/debitos/" + idCliente);
//                .pipe(map(res => res.json()));
    }
}