import { Routes } from '@angular/router';
import { EnrutamientoAbrahanComponent } from './enrutamiento-abrahan/enrutamiento-abrahan.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: CabeceraComponent }, 
  { path: 'enrutamiento-abrahan', component: EnrutamientoAbrahanComponent },
];
