import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { EstadoOptions } from '../../model/estadoOptions';
import { FechaPipe } from '../../pipes/fecha.pipe';
import { Cliente } from '../../model/cliente';

import { ClienteService } from '../../servicios/cliente.service';
import { DelegacionService } from '../../servicios/delegacion.service';
import { ContactoService } from '../../servicios/contacto.service';

@Component({
  templateUrl: './clientesNew.component.html',
  styleUrls: ['./clientesNew.component.css']
})
export class ClientesNewComponent implements OnInit {
  keyvalues: Array<object> = [];
  estadoOptions = new EstadoOptions();
  cliente: Cliente;
  clienteForm: FormGroup;
  optionsDeleg: any = [];
  fechaPipe: FechaPipe;

  tabla: any = new Object();
  resultado: string;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private delegacionService: DelegacionService
  ) { }

  ngOnInit() {
    if(this.estadoOptions.getLenght() == 0) {
      this.delegacionService.getDelegaciones().subscribe((response: Array<object>) => {
          this.keyvalues = response;
          this.estadoOptions.setDelegKV(this.keyvalues);
          this.optionsDeleg =  this.estadoOptions.getEstados();
        },
        err => {
          console.log('Error en delegacionService.getDelegaciones() ' + ' Message: ' + err.message);
        }
      );
    }
    this.clienteForm = this.formBuilder.group({
        cidCliente: [''],
        cTipoDoc: [''],
        cNroDoc: ['', Validators.required],
        cCbu: ['', Validators.required],
        cCaSucursal: [''],
        cCaNro: [''], 
        cNombre: ['', Validators.required],
        cApellido: ['', Validators.required],
        cFIngreso: [''],
        cIdLocParticular: [''],
        cIdLocLaboral: [''],
        cIdLocInformado: [''],
        cIdDelegacion: ['', Validators.required],
        cEstado: [''],
        cFEstado: [''],
        cComentarios: ['']
      }, {
        //        validator: ValidarCbu('cbu')
      });
      this.cliente = new Cliente(0, "D.N.I.", 0, "", "", "", "", "", "", 0, 0, 0, 0, 0, "", "");
      this.poblar();  
  }
  private poblar() {
    this.clienteForm.controls['cidCliente'].disable();
    this.clienteForm.controls['cidCliente'].setValue(this.cliente.idCliente);
    this.clienteForm.controls['cTipoDoc'].disable();
    this.clienteForm.controls['cTipoDoc'].setValue(this.cliente.tipoDoc);
    this.clienteForm.controls['cNroDoc'].setValue(this.cliente.nroDoc);
    this.clienteForm.controls['cCbu'].setValue(this.cliente.cbu);
    this.clienteForm.controls['cCaSucursal'].setValue(this.cliente.caSucursal);
    this.clienteForm.controls['cCaNro'].setValue(this.cliente.caNro);
    this.clienteForm.controls['cNombre'].setValue(this.cliente.nombre);
    this.clienteForm.controls['cApellido'].setValue(this.cliente.apellido);
    this.clienteForm.controls['cFIngreso'].setValue(this.cliente.fechaIngreso);
    this.clienteForm.controls['cIdLocParticular'].setValue(this.cliente.idLocParticular);
    this.clienteForm.controls['cIdLocLaboral'].setValue(this.cliente.idLocLaboral);
    this.clienteForm.controls['cIdLocInformado'].setValue(this.cliente.idLocInformado);
    this.clienteForm.controls['cIdDelegacion'].setValue(this.cliente.idDelegacion);
    this.clienteForm.controls['cEstado'].setValue(this.cliente.estado);
    this.clienteForm.controls['cFEstado'].setValue(this.cliente.fechaEstado);
    this.clienteForm.controls['cComentarios'].setValue(this.cliente.comentarios);
  }
  private geClienteView(idCliente: number) {
    this.clienteService.setClienteId(idCliente);
    this.clienteService.getClienteId().subscribe(
      data => {
        this.tabla = data;
        this.cliente = new Cliente(
          this.tabla.idCliente,
          this.tabla.tipoDoc,
          this.tabla.nroDoc,
          this.tabla.cbu,
          this.tabla.caSucursal,
          this.tabla.caNro,
          this.tabla.nombre,
          this.tabla.apellido,
          this.tabla.fechaIngreso,
          this.tabla.idLocParticular,
          this.tabla.idLocLaboral,
          this.tabla.idLocInformado,
          this.tabla.idDelegacion,
          this.tabla.estado,
          this.tabla.fechaEstado,
          this.tabla.comentarios
  //        this.estadoOptions.getEstadoId(this.tabla.utilizar)[0].idEstado
        );
        this.clienteForm.controls['cidCliente'].setValue(this.cliente.idCliente);
        this.clienteForm.controls['cTipoDoc'].setValue(this.cliente.tipoDoc);
        this.clienteForm.controls['cNroDoc'].setValue(this.cliente.nroDoc);
        this.clienteForm.controls['cCbu'].setValue(this.cliente.cbu);
        this.clienteForm.controls['cCaSucursal'].setValue(this.cliente.caSucursal);
        this.clienteForm.controls['cCaNro'].setValue(this.cliente.caNro);
        this.clienteForm.controls['cNombre'].setValue(this.cliente.nombre);
        this.clienteForm.controls['cApellido'].setValue(this.cliente.apellido);
  //     this.clienteForm.controls['cFIngreso'].setValue(this.changeFecha(this.cliente.F_INGRESO));
        this.clienteForm.controls['cIdLocParticular'].setValue(this.cliente.idLocParticular);
        this.clienteForm.controls['cIdLocLaboral'].setValue(this.cliente.idLocLaboral);
        this.clienteForm.controls['cIdLocInformado'].setValue(this.cliente.idLocInformado);
        this.clienteForm.controls['cIdDelegacion'].setValue(this.cliente.idDelegacion);
        this.clienteForm.controls['cEstado'].setValue(this.cliente.estado);
        this.clienteForm.controls['cFEstado'].setValue(this.cliente.fechaEstado);
        this.clienteForm.controls['cComentarios'].setValue(this.cliente.comentarios);

  //      this.clienteForm.controls['delegEstado'].setValue(this.estadoOptions.getEstadoId(this.delegacion.utilizar)[0].idEstado);
      },
      err => {
        console.log('Error en ClientenService.getCliente ' + ' Message: ' + err.message);
      }
    );
  }

  get f() { return this.clienteForm.controls; }
  actualizarCliente() {
    if (this.clienteForm.invalid) {
        return;
    }
    this.cliente.idCliente = Number(this.clienteForm.controls['cidCliente'].value);
    this.cliente.tipoDoc = this.clienteForm.controls['cTipoDoc'].value;
    this.cliente.nroDoc = Number(this.clienteForm.controls['cNroDoc'].value);
    this.cliente.cbu = this.clienteForm.controls['cCbu'].value;
    this.cliente.caSucursal = this.clienteForm.controls['cCaSucursal'].value;
    this.cliente.caNro = this.clienteForm.controls['cCaNro'].value;
    this.cliente.nombre = this.clienteForm.controls['cNombre'].value;
    this.cliente.apellido = this.clienteForm.controls['cApellido'].value;
    this.cliente.idLocParticular = Number(this.clienteForm.controls['cIdLocParticular'].value);
    this.cliente.idLocLaboral = Number(this.clienteForm.controls['cIdLocLaboral'].value);
    this.cliente.idLocInformado = Number(this.clienteForm.controls['cIdLocInformado'].value);
    this.cliente.idDelegacion = Number(this.clienteForm.controls['cIdDelegacion'].value); // this.optionsDeleg.getEstadoId(this.clienteForm.controls['cIdDelegacion'].value)[0].idEstado;
    this.cliente.estado = Number(this.clienteForm.controls['cEstado'].value);
    this.cliente.fechaEstado = this.clienteForm.controls['cFEstado'].value;
    this.cliente.comentarios = this.clienteForm.controls['cComentarios'].value;
    
    this.clienteService.postCliente(this.cliente).subscribe(
      response => {
        console.log(response);
        this.resultado = "Actualización exitosa";
      }, err => {
        this.resultado = err.message;
      }
    );
  }
}