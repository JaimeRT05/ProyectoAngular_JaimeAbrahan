import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstructuralesComponent } from '../estructurales/estructurales.component'; // Importar el componente
import { FormularioAbrahanComponent } from '../formulario-abrahan/formulario-abrahan.component';
import { EnrutamientoAbrahanComponent } from '../enrutamiento-abrahan/enrutamiento-abrahan.component';

import { DirectivasJaimeComponent } from '../directivas-jaime/directivas-jaime.component';
import { FormularioJaimeComponent } from '../formulario-jaime/formulario-jaime.component';
import { EnrutamientoJaimeComponent } from '../enrutamiento-jaime/enrutamiento-jaime.component';

@Component({
  selector: 'app-cabecera',
  standalone: true, // Declarar como componente standalone
  imports: [CommonModule, EstructuralesComponent, FormularioAbrahanComponent,EnrutamientoAbrahanComponent, DirectivasJaimeComponent, FormularioJaimeComponent,EnrutamientoJaimeComponent], // Importar los componentes aquí
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  menu = [
    {
      titulo: 'Directivas',
      submenus: ['Estructurales', 'De atributo']
    },
    {
      titulo: 'Eventos y formularios',
      submenus: ['FormAbrahan', 'FormJaime']
    },
    {
      titulo: 'Enrutamiento y Acceso a datos',
      submenus: ['Abrahan', 'Jaime']
    }
  ];

  submenuSeleccionado: string | null = null;

  toggleSubmenu(item: any) {
    item.visible = !item.visible;
  }

  seleccionarSubmenu(submenu: string, event: Event) {
    event.stopPropagation(); // Evitar que el clic cierre el submenú
    this.submenuSeleccionado = submenu;
  }
}
