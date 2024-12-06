import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";
import { routes } from '../../app.routes';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent,RouterOutlet],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  mensajepadre = "hola hijo"
  mensajecibido: String = '';
  valor = 0;

  recibirMensaje($event: String) {
    this.mensajecibido = $event

  }

   incrementar() {
    this.valor++;
  }

  disminuir() {
    this.valor--;
  }
}
