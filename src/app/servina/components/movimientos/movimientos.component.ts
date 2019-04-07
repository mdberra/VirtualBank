import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Debito } from '../../model/debito';
import { DebitoService } from '../../servicios/debito.service';
import { ClienteService } from '../../servicios/cliente.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  servicios: Array<number> = [];
  periodos: Array<string> = [];
  private rows: Array<object> = [];
  private cliente;
  public idCliente:number;
  public nombreApellido:string = "";

  nroDoc: string;

  constructor(
    private route: ActivatedRoute,
    private _debitoService: DebitoService,
    private _clienteService: ClienteService
    ) {
  }
  ngOnInit() {
    this.route.params.subscribe((params) => this.nroDoc = params.nroDoc);
//    console.log(this.nroDoc);
//  }
//
//  buscarValor(nroDoc: string) {
 //   if (nroDoc) {
      this._clienteService.getCliente(this.nroDoc).subscribe(  //busco cliente por nroDoc
        (res: Array<object>) => {
          this.cliente = res;
          this.idCliente = this.cliente['idCliente'];
          this.nombreApellido = this.cliente['nombre'] + " " + this.cliente['apellido'];

          this._debitoService.getDebitos(this.idCliente).subscribe(
            (res: Array<object>) => {
              this.servicios = [];
              this.periodos = [];
              this.rows = res;
              for(let p of this.rows) {
                let ser = p['idServicio'];
                if(this.servicios.indexOf(ser)<0) {
                  this.servicios.push(ser);
                }
                let per = p['periodo'];
                if(this.periodos.indexOf(per)<0) {
                  this.periodos.push(per);
                }
              }
//              console.log(this.servicios);
//              console.log(this.periodos);
//              console.log(this.rows);
            },
            err => {
                console.log('Error en DebitoService.getDebitos id:' + this.idCliente + 
                            ' Message: ' + err.message);
            }
          );
        },
        err => {
            console.log('Error en ClienteService.getCliente nroDoc:' + this.nroDoc + 
                        ' Message: ' + err.message);
        }
      );
//    }
  }
}
