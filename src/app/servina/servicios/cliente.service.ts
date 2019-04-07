import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Cliente } from '../model/cliente';
  
@Injectable({providedIn: 'root'})
export class ClienteService {
    private baseUrl: string = "http://localhost:5000/api";

    constructor( private httpClient: HttpClient ) {
    }
    getCliente(nroDoc: string) {
        return this.httpClient.get(this.baseUrl + "/cliente/" + nroDoc);
    }
    getFindCliente() {
        return this.httpClient.get(this.baseUrl + "/findCliente");
    }
}