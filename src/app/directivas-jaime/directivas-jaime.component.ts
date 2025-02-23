import { Component,Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';
import {CommonModule} from '@angular/common';

@Directive({

  selector: '[appResaltar]'

})
export class ResaltarDirectiva{

  @Input() appResaltar: String = 'yellow';

  constructor(private ele : ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.backgroundColor = this.appResaltar;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.backgroundColor = null;
  }
}

@Directive({

  selector: '[appCambiarTexto]'

})

export class CambiarTextoDirectiva {

  @Input() nuevoTexto: string = 'Texto cambiado';
  private textoOriginal: string ='';

  constructor(private ele: ElementRef) {}

  ngOnInit() {
    this.textoOriginal = this.ele.nativeElement.innerText;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.innerText = this.nuevoTexto;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.innerText = this.textoOriginal;
  }

 
}

@Directive({

  selector: '[appRotarElemento]'

})

export class RotarElementoDirectiva {

  private rotado = false;

  constructor(private ele: ElementRef) {}

  @HostListener('click') onClick() {
    this.rotado = !this.rotado;
    this.ele.nativeElement.style.transform = this.rotado ? 'rotate(180deg)' : 'rotate(0deg)';
    this.ele.nativeElement.style.transform = 'transform 0.5s ease-in-out';
  }
}

@Directive({

  selector: '[appCambiarTamano]'

})

export class CambiarTamanoDirectiva {

  @Input() tamanoGrande: string = '30px';
  @Input() tamanoNormal: string = '16px';
  private alternar: boolean = false;

  constructor(private ele: ElementRef) {}

  @HostBinding('style.fontSize') fontSize!: string;

  ngOnInit() {
    this.ele.nativeElement.style.fontSize = this.tamanoNormal;
  }

  @HostListener('dblclick', ['$event']) onDoubleClick(event: Event) {
    event?.preventDefault();
    this.alternar = !this.alternar;
    this.fontSize = this.alternar ? this.tamanoGrande : this.tamanoNormal;
  }

}

//Aqui se aplican las directivas
@Component({
  selector: 'app-directivas-jaime',
  standalone: true,
  imports: [CommonModule, ResaltarDirectiva, CambiarTextoDirectiva, RotarElementoDirectiva, CambiarTamanoDirectiva ],
  templateUrl: './directivas-jaime.component.html',
  styleUrl: './directivas-jaime.component.css'
})
export class DirectivasJaimeComponent {

}
