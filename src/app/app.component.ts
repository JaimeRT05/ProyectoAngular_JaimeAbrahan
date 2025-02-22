import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importa RouterOutlet para manejar rutas
import { CabeceraComponent } from "./cabecera/cabecera.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, 
  imports: [RouterOutlet, CabeceraComponent, FooterComponent] 
})
export class AppComponent {
  title = 'ProyectoNuevoAngular';
}
