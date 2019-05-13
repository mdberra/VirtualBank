import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Cliente } from '../model/cliente';
 

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
};
@Injectable({providedIn: 'root'})
export class ClienteService {
    private url: string = "http://localhost:5000";
    private urlCliente: string = this.url + "/api/cliente";
    private urlFindCliente: string = this.url + "/api/findCliente";
    private idCliente: number;
    private cliente: Cliente;

    constructor( private httpClient: HttpClient ) {
    }

    public setClienteId(idCliente: number) {
        this.idCliente = idCliente;
    }
    public getClienteId() {
        return this.httpClient.get(this.urlCliente + "/" + this.idCliente);
    }
    public postCliente(c: Cliente): Observable<Cliente> {
        console.log(c);
        return this.httpClient.post<Cliente>(this.urlCliente, c, httpOptions);
    }    
    getCliente(nroDoc: string) {
        return this.httpClient.get(this.urlCliente + + "/" + nroDoc);
    }
    getFindCliente() {
        return this.httpClient.get(this.urlFindCliente);
    }
}