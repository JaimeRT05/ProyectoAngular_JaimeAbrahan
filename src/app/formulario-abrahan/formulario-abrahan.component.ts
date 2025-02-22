import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-abrahan',
  standalone: true, // Declarar como standalone
  imports: [CommonModule, FormsModule], // Importar FormsModule aquí
  templateUrl: './formulario-abrahan.component.html',
  styleUrls: ['./formulario-abrahan.component.css']
})
export class FormularioAbrahanComponent {
  nombreTarea: string = '';
  descripcionTarea: string = '';
  fechaVencimiento: string = '';
  prioridad: string = 'Media';
  responsable: string = '';
  mensaje: string = '';
  eventoDetectado: string = '';

  agregarTarea(event: Event) {
    event.preventDefault(); // Evita la recarga de la página
    if (this.nombreTarea.trim() && this.descripcionTarea.trim() && this.fechaVencimiento && this.responsable.trim()) {
      this.mensaje = `✅ Tarea agregada correctamente: ${this.nombreTarea} - ${this.descripcionTarea} - Vence: ${this.fechaVencimiento} - Prioridad: ${this.prioridad} - Responsable: ${this.responsable}`;
      this.limpiarCampos();
    }
  }

  limpiarCampos() {
    this.nombreTarea = '';
    this.descripcionTarea = '';
    this.fechaVencimiento = '';
    this.prioridad = 'Media';
    this.responsable = '';
  }

  detectarEvento(evento: string) {
    this.eventoDetectado = `Último evento detectado: ${evento}`;
  }
}