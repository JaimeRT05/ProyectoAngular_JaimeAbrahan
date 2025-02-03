import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstructuralesComponent } from '../estructurales/estructurales.component'; // Importar el componente

@Component({
  selector: 'app-cabecera',
  standalone: true, // Declarar como componente standalone
  imports: [CommonModule, EstructuralesComponent], // Importar el componente aquí
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
      titulo: 'Creación y reutilización de componentes',
      submenus: []
    },
    {
      titulo: 'Eventos y formularios',
      submenus: []
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
