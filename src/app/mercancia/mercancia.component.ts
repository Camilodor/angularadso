import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mercancia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mercancia.component.html',
  styleUrl: './mercancia.component.css'
})
export class MercanciaComponent {

  mercancias = [
    { id_mercancia: 1, remitente: 'Empresa A', destino: 'Ciudad X', peso: '10kg', unidades: 5 },
    { id_mercancia: 2, remitente: 'Empresa B', destino: 'Ciudad Y', peso: '15kg', unidades: 3 },
    { id_mercancia: 3, remitente: 'Empresa C', destino: 'Ciudad Z', peso: '7kg', unidades: 10 },
    { id_mercancia: 4, remitente: 'Empresa D', destino: 'Ciudad W', peso: '20kg', unidades: 1 },
    { id_mercancia: 5, remitente: 'Empresa E', destino: 'Ciudad V', peso: '5kg', unidades: 8 },
    { id_mercancia: 6, remitente: 'Empresa F', destino: 'Ciudad U', peso: '12kg', unidades: 4 },
    { id_mercancia: 7, remitente: 'Empresa G', destino: 'Ciudad T', peso: '18kg', unidades: 2 },
    { id_mercancia: 8, remitente: 'Empresa H', destino: 'Ciudad S', peso: '30kg', unidades: 6 },
    { id_mercancia: 9, remitente: 'Empresa I', destino: 'Ciudad R', peso: '25kg', unidades: 3 },
    { id_mercancia: 10, remitente: 'Empresa J', destino: 'Ciudad Q', peso: '8kg', unidades: 9 }
  ];

  editarMercancia(id: number) {
    alert(`Editar mercancía con ID: ${id}`);
  }

  eliminarMercancia(id: number) {
    alert(`Eliminar mercancía con ID: ${id}`);
  }

  consultarMercancia(id: number) {
    alert(`Consultar mercancía con ID: ${id}`);
  }
}