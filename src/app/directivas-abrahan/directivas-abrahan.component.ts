import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-abrahan',
  templateUrl: './directivas-abrahan.component.html',
  styleUrls: ['./directivas-abrahan.component.scss']
})
export class DirectivasStructAbrahanComponent {
  mostrarLista = true;
  usuarios = [
    { nombre: 'Juan', activo: true },
    { nombre: 'Ana', activo: false },
    { nombre: 'Luis', activo: true }
  ];

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }
}
