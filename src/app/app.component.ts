import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivasAbrahanComponent } from "./directivas-abrahan/directivas-abrahan.component";
import { CabeceraComponent } from "./cabecera/cabecera.component";

@Component({
  selector: 'app-root',
  imports: [ DirectivasAbrahanComponent, CabeceraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoNuevoAngular';



}
