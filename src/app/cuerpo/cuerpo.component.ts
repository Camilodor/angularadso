import { Component } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [PadreComponent],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {
  valor = 0;

  incrementar() {
    this.valor++;
  }

  disminuir() {
    this.valor--;
  }

}
