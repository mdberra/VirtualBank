import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Contacto } from '../../model/contacto';

import { ContactoService } from '../../servicios/contacto.service';
import { EstadoDescripOption } from '../../model/estadoDescripOption';

import { ValidarCbu } from './validar.cbu';

@Component({
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})


export class ContactoComponent implements OnInit {
    contactos: Array<object> = [];
    contactoTabla: any = new Object();
    keyvalues: Array<object> = [];

//    eDOptions: Array<object> = [];
    eDOptions: EstadoDescripOption[] = [];
    estadoDescripOption: EstadoDescripOption;
    selectedEstadoContactoId = 0;

    dataModel : any;
    imageToShow: any;
    closeResult: string;
    resultado: string;
    
  contacto: Contacto;
  contactoForm: FormGroup;
  submitted = false;

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
      idContacto: { title: 'Nro',       width: '5%', filter: false},
      dni:        { title: 'Nro Doc',   width: '15%'},
      apellido:   { title: 'Apellido',  width: '20%'},
      monto:      { title: 'Solicitado', width: '10%'},
      telefono:   { title: 'Teléfono',  width: '15%'},
      fechaIngreso: { title: 'Fecha', width: '20px',
        valuePrepareFunction: (fechaIngreso) => { //2019-01-14T14:29:30Z
          let anio = fechaIngreso.substring(0,4);
          let mes  = fechaIngreso.substring(5,7);
          let dia  = fechaIngreso.substring(8,10);
          let fecha = new String(dia + "/" + mes + "/" + anio) ;
          return fecha;
        }
      },
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
      private formBuilder: FormBuilder
      ) {
  }

  ngOnInit() {
    this.resultado = "";
    this.contactoService.getEstadoDescripOptionsContacto().subscribe(
        (response: Array<object>) => {
          this.keyvalues = response;
          this.eDOptions = [];
          for(let kv of this.keyvalues) {
            this.estadoDescripOption = new EstadoDescripOption(Number(kv['idEstado']), kv['descripcion']);
            this.eDOptions.push(this.estadoDescripOption);
          }
          this.llenarTabla();
    },
     err => {
       console.log('Error en ContactoService.getContacto ' + ' Message: ' + err.message);
     }
    );
    this.getContactoView(1);

    this.contactoForm = this.formBuilder.group({
        cidContacto: [''],
        cnombre: ['', Validators.required],
        capellido: ['', Validators.required],
        cemail: ['', [Validators.required, Validators.email]],
        ctelefono: ['', [Validators.required, Validators.pattern('[0-9]{7,15}')]],
        cdni: ['', [Validators.required, Validators.pattern('[0-9]{7,8}')]],
        cmonto: ['', [Validators.required, Validators.pattern('[0-9]{4,6}')]],
        cplazo: ['', [Validators.required, Validators.pattern('[0-9]{2}')]],
        cmensaje: [''],
        ccbu: ['', [Validators.required, Validators.pattern('[0-9]{22}')]],
        cidImagen: [''],
        cfechaIngreso: [''],
        cestado: [''],
        cfechaEstado: [''],
        cestadoDescrip: [''],
        selectedEstadoContactoId: ['']
    }, {
//        validator: ValidarCbu('cbu')
    });
  }
  private llenarTabla() {
    this.contactoService.getContactos().subscribe(
      (response: Array<object>) => {
        this.contactos = response;
      },
      err => {
          console.log('Error en ContactoService.getContacto ' + ' Message: ' + err.message);
      }
    );
  }
  private getContactoView(idContacto: number) {
    let reader = new FileReader();
    this.imageToShow = reader.result;   //blank

    this.contactoService.setContactoId(idContacto);
    this.contactoService.getContactoId().subscribe(
      data => {
        this.contactoTabla = data;
        this.contacto = new Contacto(
          this.contactoTabla.idContacto,
          this.contactoTabla.nombre,
          this.contactoTabla.apellido,
          this.contactoTabla.email,
          this.contactoTabla.telefono,
          this.contactoTabla.dni,
          this.contactoTabla.monto,
          this.contactoTabla.plazo,
          this.contactoTabla.mensaje,
          this.contactoTabla.cbu,
          this.contactoTabla.idImagen,
          this.contactoTabla.fechaIngreso,
          this.contactoTabla.estado,
          this.contactoTabla.fechaEstado,
          this.contactoTabla.EstadoDescrip
        );        
        this.contactoForm.controls['cidContacto'].setValue(this.contactoTabla.idContacto);
        this.contactoForm.controls['cnombre'].setValue(this.contactoTabla.nombre);
        this.contactoForm.controls['capellido'].setValue(this.contactoTabla.apellido);
        this.contactoForm.controls['cemail'].setValue(this.contactoTabla.email);
        this.contactoForm.controls['ctelefono'].setValue(this.contactoTabla.telefono);
        this.contactoForm.controls['cdni'].setValue(this.contactoTabla.dni);
        this.contactoForm.controls['cmonto'].setValue(this.contactoTabla.monto);
        this.contactoForm.controls['cplazo'].setValue(this.contactoTabla.plazo);
        this.contactoForm.controls['cmensaje'].setValue(this.contactoTabla.mensaje);
        this.contactoForm.controls['ccbu'].setValue(this.contactoTabla.cbu);
        this.contactoForm.controls['cidImagen'].setValue(this.contactoTabla.idImagen);
        this.contactoForm.controls['cfechaIngreso'].setValue(this.changeFecha(this.contactoTabla.fechaIngreso));
        this.contactoForm.controls['cestado'].setValue(this.contactoTabla.estado);
        this.contactoForm.controls['cfechaEstado'].setValue(this.contactoTabla.fechaEstado);
        this.contactoForm.controls['cestadoDescrip'].setValue(this.contactoTabla.estadoDescrip);
        this.selectedEstadoContactoId = this.contactoTabla.estado;
    },
    err => {
      console.log('Error en ContactoService.getContacto ' + ' Message: ' + err.message);
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
      this.getContactoView(Number(event.data['idContacto']));
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactoForm.controls; }
  onSubmit() {
    console.log(this.eDOptions[this.selectedEstadoContactoId]);

      this.submitted = true;

      // stop here if form is invalid
      if (this.contactoForm.invalid) {
          return;
      }
      this.contacto.nombre = this.contactoForm.controls['cnombre'].value;
      this.contacto.apellido = this.contactoForm.controls['capellido'].value;
      this.contacto.email = this.contactoForm.controls['cemail'].value;
      this.contacto.telefono = this.contactoForm.controls['ctelefono'].value;
      this.contacto.dni = Number(this.contactoForm.controls['cdni'].value);
      this.contacto.monto = Number(this.contactoForm.controls['cmonto'].value);
      this.contacto.plazo = Number(this.contactoForm.controls['cplazo'].value);
      this.contacto.mensaje = this.contactoForm.controls['cmensaje'].value;
      this.contacto.cbu = this.contactoForm.controls['ccbu'].value;

      console.log(this.contacto);

      this.contactoService.putContacto(this.contacto).subscribe(
        response => {
          console.log("putContacto " + response);
          this.resultado = "Actualización exitosa";
          this.llenarTabla();
        }, err => {
          this.resultado = err.message;
        }
      );
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

  selectionChanged() {

  }
  findImage(tipo: string) {
    this.contactoService.getImage(this.contacto.idImagen + tipo).subscribe(
      data => {
        this.createImageFromBlob(data);
      }, err => {
          console.log('Error en ContactoService.getImage ' + ' Message: ' + err.message);
      }
    );
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if(image) {
      reader.readAsDataURL(image);
    }
  }
}
