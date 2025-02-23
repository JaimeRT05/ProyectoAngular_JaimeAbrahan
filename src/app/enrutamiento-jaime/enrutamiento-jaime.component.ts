import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaService } from '../services/mascota.service';
import { UsuarioService } from '../services/usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enrutamiento-jaime',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrutamiento-jaime.component.html',
  styleUrls: ['./enrutamiento-jaime.component.css']
})
export class EnrutamientoJaimeComponent {
  usuarios: any[] = [];
  mascotas: any[] = [];
  usuarioSeleccionado!: number;
  nuevaMascota = { nombre: '', especie: '', raza: '', usuario: { id: 0 } };
  mascotaEditando: any = null;

  constructor(private mascotaService: MascotaService, private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuarioService.obtenerUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  obtenerMascotas() {
    if (this.usuarioSeleccionado) {
      this.mascotaService.obtenerMascotasPorUsuario(this.usuarioSeleccionado).subscribe(data => {
        this.mascotas = data;
      });
    }
  }

  registrarMascota() {
    if (!this.usuarioSeleccionado) {
      alert("Debes seleccionar un usuario antes de registrar una mascota.");
      return;
    }
  
    this.nuevaMascota.usuario.id = this.usuarioSeleccionado; // Asigna el ID del usuario seleccionado
  
    this.mascotaService.registrarMascota(this.nuevaMascota).subscribe(mascota => {
      this.mascotas.push(mascota);
      this.nuevaMascota = { nombre: '', especie: '', raza: '', usuario: { id: 0 } }; // Reiniciar el formulario
    });
  }
  

  editarMascota(mascota: any) {
    this.mascotaEditando = { ...mascota };
  }

  actualizarMascota() {
    this.mascotaService.actualizarMascota(this.mascotaEditando.id, this.mascotaEditando).subscribe(() => {
      this.obtenerMascotas();
      this.mascotaEditando = null;
    });
  }

  eliminarMascota(id: number) {
    this.mascotaService.eliminarMascota(id).subscribe(() => {
      this.mascotas = this.mascotas.filter(m => m.id !== id);
    });
  }
}
