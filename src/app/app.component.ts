import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from "./cabecera/cabecera.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CabeceraComponent, FooterComponent]
})
export class AppComponent {
  title = 'ProyectoNuevoAngular';



}
