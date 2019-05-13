import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from '../app/servina/components/detalle/contacto.component';
import { ClientesComponent } from './servina/components/clientes/clientes.component';
import { ClientesNewComponent } from './servina/components/clientesNew/clientesNew.component';
import { MovimientosComponent } from './servina/components/movimientos/movimientos.component';
import { DelegacionesComponent } from './servina/components/delegaciones/delegaciones.component';
import { DelegacionesNewComponent } from './servina/components/delegacionesNew/delegacionesNew.component';

const APP_ROUTES: Routes = [
    { path: 'contacto', component: ContactoComponent },
    { path: 'cliente', component: ClientesComponent },
    { path: 'clienteNew', component: ClientesNewComponent },
    { path: 'movimientos/:nroDoc', component: MovimientosComponent },
    { path: 'delegaciones', component: DelegacionesComponent },
    { path: 'delegacionesNew', component: DelegacionesNewComponent },
    { path: '**', component: ContactoComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
