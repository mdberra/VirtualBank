import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Delegaciones } from '../../model/delegaciones';

import { DelegacionService } from '../../servicios/delegacion.service';
import { ContactoService } from '../../servicios/contacto.service';
import { EstadoDescripOption } from '../../model/estadoDescripOption';
import { FechaPipe } from '../../pipes/fecha.pipe';

@Component({
  templateUrl: './delegaciones.component.html',
  styleUrls: ['./delegaciones.component.css']
})

export class DelegacionesComponent implements OnInit {
    delegaciones: Array<object> = [];
    delegacionTabla: any = new Object();
    keyvalues: Array<object> = [];
    eDOptions: Array<object> = [];
    estadoDescripOption: EstadoDescripOption;
    dataModel : any;
    fechaPipe: FechaPipe;
    
  delegacion: Delegaciones;
  delegacionForm: FormGroup;
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
      idDelegacion:  { title: 'Nro',       width: '5%', filter: false},
      codigo:        { title: 'Codigo',   width: '25'},
      descripcion:   { title: 'Descripcion',  width: '35%'},
/**       fechaAlta:     { title: 'Fecha Alta', width: '10px',
        valuePrepareFunction: (fechaAlta) => { //2019-01-14T14:29:30Z
          let anio = fechaAlta.substring(0,4);
          let mes  = fechaAlta.substring(5,7);
          let dia  = fechaAlta.substring(8,10);
          let fecha = new String(dia + "/" + mes + "/" + anio) ;
          return fecha;
        }
}, */
      bdescripcion:   { title: 'Banco',  width: '20%'},
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

  constructor(
      private contactoService: ContactoService,
      private delegacionService: DelegacionService,
      private formBuilder: FormBuilder
      ) {
  }

  ngOnInit() {
    this.contactoService.getEstadoDescripOptions().subscribe(
        (response: Array<object>) => {
          this.keyvalues = response;
          this.eDOptions = [];
          for(let kv of this.keyvalues) {
            this.estadoDescripOption = new EstadoDescripOption(Number(kv['idEstado']), kv['descripcion']);
            this.eDOptions.push(this.estadoDescripOption);
          }
          console.log(this.eDOptions);
          this.llenarTabla();
    },
     err => {
       console.log('Error en ContactoService.getContacto ' + ' Message: ' + err.message);
     }
    );
//    this.getDelegacionView(1);

    this.delegacionForm = this.formBuilder.group({
        cidDelegacion: [''],
        ccodigo: ['', Validators.required],
        cdescripcion: ['', Validators.required],
        cfechaAlta: ['', [Validators.required, Validators.email]],
        cbidBanco: ['', [Validators.required]],
        cbanco: ['']
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
        this.delegacionTabla = data;
        this.delegacion = new Delegaciones(
          this.delegacionTabla.idDelegacion,
          this.delegacionTabla.codigo,
          this.delegacionTabla.descripcion,
          this.delegacionTabla.fechaAlta,
          this.delegacionTabla.utilizar,
          this.delegacionTabla.idBanco,
          this.delegacionTabla.bcodigo,
          this.delegacionTabla.bdescripcion,
          this.delegacionTabla.codigoDebito,
          this.delegacionTabla.descripPrestacion,
          this.delegacionTabla.bancoRecaudador
        );
        this.delegacionForm.controls['ccodigo'].setValue(this.delegacionTabla.codigo);
        this.delegacionForm.controls['cdescripcion'].setValue(this.delegacionTabla.descripcion);
        this.delegacionForm.controls['cfechaAlta'].setValue(this.delegacionTabla.fechaAlta);
        this.delegacionForm.controls['cbidBanco'].setValue(this.delegacionTabla.idBanco);
        this.delegacionForm.controls['cbanco'].setValue(this.delegacionTabla.bcodigo + " " + this.delegacionTabla.bdescripcion);
    },
    err => {
      console.log('Error en DelegacionService.getDelegaciones ' + ' Message: ' + err.message);
    }
    );
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
  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.delegacionForm.invalid) {
          return;
      }
      this.delegacion.codigo = this.delegacionForm.controls['ccodigo'].value;
      this.delegacion.descripcion = this.delegacionForm.controls['cdescripcion'].value;
      this.delegacion.fechaAlta = this.delegacionForm.controls['cfechaAlta'].value;
      this.delegacion.idBanco = Number(this.delegacionForm.controls['cbidBanco'].value);
      this.delegacion.bcodigo = this.delegacionForm.controls['cbanco'].value;

      console.log(this.delegacion);
/**
      this.delegacionService.putDelegacion(this.delegacion).subscribe(
        response => {
          console.log("putContacto " + response);
          this.resultado = "Actualización exitosa";
          this.llenarTabla();
        }, err => {
          this.resultado = err.message;
        }
      ); */
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

/**
Delegacion (Codigo, Descripcion, ID_BANCO, Habilitada)
Banco  (Codigo, Descripcion, CodigoDebito, DescripPrestacion, BancoRecaudador)
DiasCobro (FechaDisparo)

Disparo  (id_disaparo, fecha, cantRegistros, importe)


Pendiente de disparar
DisparoEntidades (Identificador, Tipo, Id_Disparo = nul)
*/