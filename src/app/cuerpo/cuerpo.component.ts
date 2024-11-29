import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PadreComponent } from "../usuarios/padre/padre.component";

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [RouterLink, PadreComponent],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {



}
