import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactoService } from '../../servicios/contacto.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cantidadContactos: number = 0;

  constructor(
    private router: Router,
    private _contactoService: ContactoService
  ) { }

  ngOnInit() {
    this._contactoService.getContactos().subscribe(
      (response: Array<object>) => {
        this.cantidadContactos = response.length;
      },
      err => {
          console.log('Error en ContactoService.getContacto ' + ' Message: ' + err.message);
      }
    );
  }
  contactos() {
    this.router.navigate(['/contacto']);
  }
  clientes() {
    this.router.navigate(['/cliente', 0]);
  }
  clientesNew() {
    this.router.navigate(['/clienteNew']);
  }
  delegaciones() {
    this.router.navigate(['/delegaciones']);
  }
  delegacionesNew() {
    this.router.navigate(['/delegacionesNew']);
  }
  analisis() {
    this.router.navigate(['/analisis']);
  }
}
