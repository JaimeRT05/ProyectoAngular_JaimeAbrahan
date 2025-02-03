import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-estructurales',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './estructurales.component.html',
  styleUrls: ['./estructurales.component.css']
})
export class EstructuralesComponent {
  usuarioAutenticado: boolean = false;
  tareas: string[] = ['Comprar comida', 'Estudiar', 'Hacer ejercicio'];
  rolUsuario: string = 'admin';

  toggleAutenticacion() {
    this.usuarioAutenticado = !this.usuarioAutenticado;
  }

  agregarTarea(nuevaTarea: string) {
    if (nuevaTarea) {
      this.tareas.push(nuevaTarea);
    }
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
