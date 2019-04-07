import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
//import { LocalDataSource } from '../../../../node_modules/ng2-smart-table';

import { ClienteService } from '../../servicios/cliente.service';
import { Cliente } from '../../model/cliente';
import { ButtonViewComponent } from './ButtonViewComponent';
import { Router } from '@angular/router';
// import { ExcelService } from '../excel.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  settings = {
    actions: {
      columnTitle: "Acciones",
      add: false,
      edit: false,
      delete: false,
      position: "right"
    },
    columns: {
      tipoDoc: {
        title: 'Tipo Doc', filter: false, width: '20px', type: 'html',
                valuePrepareFunction: (cell, row) => {
                  return `<div class="text-center">${cell}</div>`;
                }
      },
      nroDoc:         { title: 'Nro Doc',     width: '10%'},
      nombre:         { title: 'Nombre',      width: '15%'},
      apellido:       { title: 'Apellido',    width: '15%'},
      delegDescrip:   { title: 'Delegacion',  width: '15%'},
      estadoDescrip:  { title: 'Estado',      width: '5%'},
      cbu:            { title: 'CBU',         width: '10%'},
      comentarios:    { title: 'Comentarios', width: '25%', filter: false}
/**       acciones: { title: 'Acciones', filter: false, width: '65px', type: 'custom',
                renderComponent: ButtonViewComponent,
                onComponentInitFunction(instance) {
                  instance.save.subscribe(row => {
                    alert('Apretando botones');
                  });
                }
      } */
    },
    pager: {
      display: true,
      perPage: 10
    },
    attr: {
      class: 'table table-striped table-hover'
    }
  };

//  source: LocalDataSource;

  clientes: Array<object> = [];
  
  constructor(
        private router: Router,
        private _clienteService: ClienteService
//        private excelService: ExcelService
    ) {  }

  ngOnInit() {
    this._clienteService.getFindCliente().subscribe(
      (response: Array<object>) => {
        this.clientes = response;
//        this.source = this.clientes;
      },
      err => {
          console.log('Error en ClienteService.getClientes '  + 
                      ' Message: ' + err.message);
      }
    );
//    this.source = new LocalDataSource(this.clientes);
  }
  userRowSeleccionada(event) {
    if(event.isSelected) {
//      console.log(event.data['nroDoc']);
      this.router.navigate(['movimientos', event.data['nroDoc']]);
    }
  }
//  exportAsXLSX(f): void {
//    this.excelService.exportAsExcelFile(this.clientes,
//                ('Clientes - ' + f.value + ' - '));
//  }
}