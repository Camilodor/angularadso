import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Output() mensajeDesdeHijo = new EventEmitter<string>()
  @Output() incrementarDesdeHijo = new EventEmitter<void>()
  @Output() disminuirDesdeHijo = new EventEmitter<void>()


  mensaje: string = '';

  enviarMensaje() {
    this.mensajeDesdeHijo.emit(this.mensaje)
  }

  incrementar() {
    this.incrementarDesdeHijo.emit();
  }

  disminuir() {
    this.disminuirDesdeHijo.emit();
  }

}
