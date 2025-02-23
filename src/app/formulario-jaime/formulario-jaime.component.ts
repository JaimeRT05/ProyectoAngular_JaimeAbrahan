import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-jaime',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-jaime.component.html',
  styleUrls: ['./formulario-jaime.component.css']
})
export class FormularioJaimeComponent {
  pedido = {
    nombre: '',
    apellidos: '',
    email: '',
    domicilio: '',
    codigoPostal: '',
    municipio: '',
    provincia: ''
  };

  pedidos: any[] = [];

  procesarFormulario() {
    this.pedidos.push({ ...this.pedido });
    this.pedido = { nombre: '', apellidos: '', email: '', domicilio: '', codigoPostal: '', municipio: '', provincia: '' };
  }
}
