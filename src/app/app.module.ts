import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DataTableModule } from 'angular-6-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgSelectModule } from '@ng-select/ng-select';

import { APP_ROUTING } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './servina/components/navbar/navbar.component';
import { ContactoComponent } from './servina/components/detalle/contacto.component';
import { ClientesComponent } from './servina/components/clientes/clientes.component';
import { ButtonViewComponent } from './servina/components/clientes/ButtonViewComponent';
import { MovimientosComponent } from './servina/components/movimientos/movimientos.component';
import { DelegacionesComponent } from './servina/components/delegaciones/delegaciones.component';

// Services
import { ContactoService } from './servina/servicios/contacto.service';
import { DelegacionService } from './servina/servicios/delegacion.service';
import { EstadisticaService } from "./servina/servicios/estadistica.service";
import { DebitoService} from "./servina/servicios/debito.service";
import { USE_VALUE } from '@angular/core/src/di/injector';

// Pipes
import { FechaPipe } from './servina/pipes/fecha.pipe';
import { PeriodoPipe } from './servina/pipes/periodo.pipe';
import { ServicioPipe } from './servina/pipes/servicio.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FechaPipe,
    PeriodoPipe,
    ServicioPipe,
    ContactoComponent,
    ClientesComponent,
    ButtonViewComponent,
    MovimientosComponent,
    DelegacionesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
    HttpClientModule,
    Ng2SmartTableModule,
    NgSelectModule
  ],
  providers: [
//    { provide: LOCALE_ID, useValue: "es-Ar" },  //para que las palabras en ingles aparezcan en español
    ContactoService,
    DelegacionService,
    NgbCarouselConfig,
    EstadisticaService,
    DebitoService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
