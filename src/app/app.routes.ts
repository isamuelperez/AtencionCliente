import { Routes } from '@angular/router';
import { AtencionCliente } from './components/atencion-cliente/atencion-cliente';

import { Home } from './components/home/home';
import { Cliente } from './components/cliente/cliente';

export const routes: Routes = [
  { path: '', redirectTo: '/citas', pathMatch: 'full' },
  { path: 'citas', component: AtencionCliente },
  {path: 'clientes', component: Cliente},
  { path: '**',  component: AtencionCliente }
];
