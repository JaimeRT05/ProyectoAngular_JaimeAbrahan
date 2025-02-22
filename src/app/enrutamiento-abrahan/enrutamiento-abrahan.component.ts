import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-enrutamiento-abrahan',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './enrutamiento-abrahan.component.html',
  styleUrls: ['./enrutamiento-abrahan.component.css']
})
export class EnrutamientoAbrahanComponent {
  usuario = {
    nombre: '',
    apellidos: '',
    dni: '',
    fechaNacimiento: '',
    genero: '',
    username: '',
    email: '',
    password: ''
  };

  mensaje: string = '';
  listaUsuarios: any[] = []; // Lista de usuarios obtenidos del backend
  usuarioSeleccionado: any = null; // Usuario seleccionado en el select

  constructor(private usuarioService: UsuarioService) {}

  registrarUsuario(event: Event) {
    event.preventDefault(); // 📌 Evita que la página se recargue

    this.usuarioService.registrarUsuario(this.usuario).subscribe(
      response => {
        console.log('Usuario registrado en la base de datos:', response);
        this.mensaje = `Usuario ${this.usuario.username} registrado con éxito`;
        this.usuario = { nombre: '', apellidos: '', dni: '', fechaNacimiento: '', genero: '', username: '', email: '', password: '' }; // Limpiar formulario
        this.obtenerUsuarios(); // Actualizar la lista de usuarios después de agregar uno nuevo
      },
      error => {
        console.error('Error al registrar usuario:', error);
        this.mensaje = 'Hubo un error al registrar el usuario.';
      }
    );
  }

  obtenerUsuarios() {
    this.usuarioService.obtenerUsuarios().subscribe(
      (usuarios: any[]) => {
        this.listaUsuarios = usuarios;
        console.log('Usuarios obtenidos:', this.listaUsuarios);
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  mostrarDatosUsuario() {
    console.log('Usuario seleccionado:', this.usuarioSeleccionado);
  }

  eliminarUsuario() {
    if (!this.usuarioSeleccionado) return;

    const confirmacion = confirm(`¿Seguro que quieres eliminar a ${this.usuarioSeleccionado.username}?`);
    if (confirmacion) {
      this.usuarioService.eliminarUsuario(this.usuarioSeleccionado.id).subscribe(
        response => {
          console.log('Usuario eliminado:', response);
          this.mensaje = `Usuario ${this.usuarioSeleccionado.username} eliminado con éxito`;
          this.usuarioSeleccionado = null;
          this.obtenerUsuarios(); // Refrescar la lista después de eliminar
        },
        error => {
          console.error('Error al eliminar usuario:', error);
          this.mensaje = 'Hubo un error al eliminar el usuario.';
        }
    
      );
    }
  }
  ngOnInit() {
    this.obtenerUsuarios(); // Cargar la lista de usuarios cuando el componente se inicializa
  }
}

