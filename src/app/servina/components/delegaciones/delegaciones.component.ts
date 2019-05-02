import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

import { Delegacion } from '../../model/delegacion';
import { Banco } from '../../model/banco';

import { DelegacionService } from '../../servicios/delegacion.service';
import { ContactoService } from '../../servicios/contacto.service';
import { EstadoOptions } from '../../model/estadoOptions';
import { FechaPipe } from '../../pipes/fecha.pipe';
import { DiasCobro } from '../../model/diasCobro';

@Component({
  templateUrl: './delegaciones.component.html',
  styleUrls: ['./delegaciones.component.css']
})

export class DelegacionesComponent implements OnInit {
  tabla: any = new Object();
  keyvalues: Array<object> = [];
  estadoOptions = new EstadoOptions();

  delegaciones: Array<object> = [];
  delegacion: Delegacion;
  delegacionForm: FormGroup;
  optionsDeleg: any = [];
  
  fechaPipe: FechaPipe;
    
  bancoForm: FormGroup;

  submitted = false;
  resultado: string;

  settings = {
    actions: {
      columnTitle: "Acciones",
      add: false,
      edit: false,
      delete: false,
      position: "right"
    },
    columns: {
/**      tipoDoc: {
        title: 'Tipo Doc', filter: false, width: '20px', type: 'html',
                valuePrepareFunction: (cell, row) => {
                  return `<div class="text-center">${cell}</div>`;
                }
      },  */
      idDelegacion:  { title: 'Nro', width: '5%', filter: false},
      codigo:        { title: 'Codigo', width: '25'},
      descripcion:   { title: 'Descripcion', width: '35%'},
/**       fechaAlta:     { title: 'Fecha Alta', width: '10px',
        valuePrepareFunction: (fechaAlta) => { //2019-01-14T14:29:30Z
          let anio = fechaAlta.substring(0,4);
          let mes  = fechaAlta.substring(5,7);
          let dia  = fechaAlta.substring(8,10);
          let fecha = new String(dia + "/" + mes + "/" + anio) ;
          return fecha;
        }
}, */
      bdescripcion: { title: 'Banco', width: '20%'},
      estadoDescrip: { title: 'Estado', width: '15%'}
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
      perPage: 16
    },
    attr: {
      class: 'table table-striped table-hover'
    }
  };

  diaCobro: NgbDateStruct;
  diasDeCobroTabla: Array<object> = [];
  diasCobro: DiasCobro;
  setDdc = {
    actions: {
      columnTitle: "Acciones",
      add: false,
      edit: false,
      delete: false,
      position: "right"
    },
    columns: {
      idDiasCobro:  { title: 'Nro', width: '5%', filter: false},
      fechaDisparo: { title: 'Fecha', width: '80px', filter: false,
        valuePrepareFunction: (fechaAlta) => { //2019-01-14T14:29:30Z
          let anio = fechaAlta.substring(0,4);
          let mes  = fechaAlta.substring(5,7);
          let dia  = fechaAlta.substring(8,10);
          let fecha = new String(dia + "/" + mes + "/" + anio) ;
          return fecha;
        }
      }
/**       acciones: { title: 'Acciones', filter: false, width: '65px', type: 'custom',
                renderComponent: ButtonViewComponent,
                (instance) {
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

  constructor(
      private contactoService: ContactoService,
      private delegacionService: DelegacionService,
      private formBuilder: FormBuilder,
      private calendar: NgbCalendar
      ) {
  }

  ngOnInit() {
    if(this.estadoOptions.getLenght() == 0) {
      this.contactoService.getEstadoDescripOptionsGeneral().subscribe( (response: Array<object>) => {
        this.keyvalues = response;
        this.estadoOptions.setEstadosKV(this.keyvalues);

        this.optionsDeleg =  this.estadoOptions.getEstados();
        this.llenarTabla();
      },
      err => {
        console.log('Error en ContactoService.getEstadoDescripOptionsGeneral() ' + ' Message: ' + err.message);
      }
      );
    }
//    this.getDelegacionView(1);

    this.delegacionForm = this.formBuilder.group({
        cidDelegacion: [''],
        ccodigo: ['', Validators.required],
        cdescripcion: ['', Validators.required],
        cfechaAlta: ['', Validators.required],
        cidLocalizacion: [''], 
        cidEntidad: [''],
        cidBanco: [''],
        delegEstado: ['']
      }, {
        //        validator: ValidarCbu('cbu')
      });
    this.bancoForm = this.formBuilder.group({
        cidBanco: [''],
        ccodigo: [''],
        cdescripcion: [''],
        ccodigoDebito: [''],
        cdescripPrestacion: [''],
        cbancoRecaudador: ['']
    }, {
//        validator: ValidarCbu('cbu')
    });
  }
  private llenarTabla() {
    this.delegacionService.getDelegaciones().subscribe(
      (response: Array<object>) => {
        this.delegaciones = response;
      },
      err => {
          console.log('Error en DelegacionService.getDelegaciones ' + ' Message: ' + err.message);
      }
    );
  }
  private getDelegacionView(idDelegacion: number) {
    this.delegacionService.setDelegacionId(idDelegacion);
    this.delegacionService.getDelegacionId().subscribe(
      data => {
        this.tabla = data;
        this.delegacion = new Delegacion(
          this.tabla.idDelegacion,
          this.tabla.codigo,
          this.tabla.descripcion,
          this.tabla.fechaAlta,
          this.tabla.idLocalizacion,
          this.tabla.idEntidad,
          this.tabla.idBanco,
          this.estadoOptions.getEstadoId(this.tabla.utilizar)[0].idEstado
//          this.estadoOptions.getEstadoId(this.tabla.utilizar)[0].descripcion
        );
        this.delegacionForm.controls['ccodigo'].setValue(this.delegacion.codigo);
        this.delegacionForm.controls['cdescripcion'].setValue(this.delegacion.descripcion);
        this.delegacionForm.controls['cfechaAlta'].setValue(this.changeFecha(this.tabla.fechaAlta));
        this.delegacionForm.controls['cidLocalizacion'].setValue(this.delegacion.idLocalizacion);
        this.delegacionForm.controls['cidEntidad'].setValue(this.delegacion.idEntidad);
        this.delegacionForm.controls['cidBanco'].setValue(this.delegacion.idBanco);
        this.delegacionForm.controls['delegEstado'].setValue(this.estadoOptions.getEstadoId(this.delegacion.utilizar)[0].idEstado);
// Banco
        this.delegacionService.setBancoId(this.tabla.idBanco);
        this.delegacionService.getBancoId().subscribe(
          data => {
            this.tabla = data;
            this.bancoForm.controls['cidBanco'].disable();
            this.bancoForm.controls['cidBanco'].setValue(this.tabla.idBanco);
            this.bancoForm.controls['ccodigo'].disable();
            this.bancoForm.controls['ccodigo'].setValue(this.tabla.codigo);
            this.bancoForm.controls['cdescripcion'].disable();
            this.bancoForm.controls['cdescripcion'].setValue(this.tabla.descripcion);
            this.bancoForm.controls['ccodigoDebito'].disable();
            this.bancoForm.controls['ccodigoDebito'].setValue(this.tabla.codigoDebito);
            this.bancoForm.controls['cdescripPrestacion'].disable();
            this.bancoForm.controls['cdescripPrestacion'].setValue(this.tabla.descripPrestacion);
            this.bancoForm.controls['cbancoRecaudador'].disable();
            this.bancoForm.controls['cbancoRecaudador'].setValue(this.tabla.bancoRecaudador);
          },
          err => {
            console.log('Error en DelegacionService.getBanco ' + ' Message: ' + err.message);
        });
        this.llenarTablaDiasCobro();
      },
      err => {
        console.log('Error en DelegacionService.getDelegaciones ' + ' Message: ' + err.message);
      }
    );
  }
  private llenarTablaDiasCobro() {
    this.delegacionService.getDiasCobroDelegacion().subscribe(
      (response: Array<object>) => {
        this.diasDeCobroTabla = response;
      },
      err => {
        console.log('Error en DelegacionService.getDiasCobroDelegacion ' + ' Message: ' + err.message);
    });
  }
  private changeFecha(fecha: String) : String {
    let anio = fecha.substring(0,4);
    let mes  = fecha.substring(5,7);
    let dia  = fecha.substring(8,10);
    let hora = fecha.substring(11,13);
    let minuto = fecha.substring(14,16);
    let segundo = fecha.substring(17,19);
    return new String(dia + "/" + mes + "/" + anio + " " + hora + ":" + minuto + ":" + segundo) ;
  }
  userRowSeleccionada(event) {
    this.resultado = "";
    if(event.isSelected) {
      this.getDelegacionView(Number(event.data['idDelegacion']));
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.delegacionForm.controls; }
  actualizarDelegacion() {
    this.submitted = true;
    if (this.delegacionForm.invalid) {
        return;
    }
    this.delegacion.codigo = this.delegacionForm.controls['ccodigo'].value;
    this.delegacion.descripcion = this.delegacionForm.controls['cdescripcion'].value;
    this.delegacion.idLocalizacion = this.delegacionForm.controls['cidLocalizacion'].value;
    this.delegacion.idEntidad = this.delegacionForm.controls['cidEntidad'].value;
    this.delegacion.idBanco = this.delegacionForm.controls['cidBanco'].value;
    this.delegacion.utilizar = ((this.delegacionForm.controls['delegEstado'].value));
//    this.delegacion.estadoDescrip = this.estadoOptions.getEstadoId(this.delegacionForm.controls['delegEstado'].value)[0].descripcion;
    this.delegacionService.putDelegacion(this.delegacion);
/**    .subscribe(
      response => {
        this.resultado = "Actualización exitosa";
        this.llenarTabla();
      }, err => {
        this.resultado = err.message;
      }
    );  */
  }
  agregarDia() {
//    this.diaCobro = this.calendar.getToday();
    var fecha = this.changeFechaGo(this.diaCobro.year, this.diaCobro.month, this.diaCobro.day);
    this.delegacionService.postDiasCobro(fecha).subscribe(
      response => {
        this.resultado = "Actualización exitosa";
        this.llenarTablaDiasCobro();
      }, err => {
        this.resultado = err.message;
      }
    );
  }
  private changeFechaGo(year: number, month: number, day: number) : String {
    var mes: String 
    var dia: String
    if(month < 10) {
      mes = new String("0"+ month);
    } else {
      mes = new String(month);
    }
    if(day < 10) {
      dia = new String("0"+day);
    } else {
      dia = new String(day);
    }
    return new String(year + "-" + mes + "-" + dia + "T00:00:00Z");
  }
  ddcRowSeleccionada(event) {
    if(event.isSelected) {
      console.log((event.data['fecha']));
    }
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}