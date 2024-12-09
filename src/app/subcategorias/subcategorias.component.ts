import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subcategorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subcategorias.component.html',
  styleUrl: './subcategorias.component.css'
})
export class SubcategoriasComponent {
  subcategorias = [
    { id_subcategoria: 1, nombre: 'Teléfonos', id_categoria: 1 },
    { id_subcategoria: 2, nombre: 'Computadoras', id_categoria: 1 },
    { id_subcategoria: 3, nombre: 'Camisetas', id_categoria: 2 },
    { id_subcategoria: 4, nombre: 'Pantalones', id_categoria: 2 },
    { id_subcategoria: 5, nombre: 'Cereales', id_categoria: 3 },
    { id_subcategoria: 6, nombre: 'Lácteos', id_categoria: 3 },
    { id_subcategoria: 7, nombre: 'Sofás', id_categoria: 4 },
    { id_subcategoria: 8, nombre: 'Mesas', id_categoria: 4 },
    { id_subcategoria: 9, nombre: 'Muñecas', id_categoria: 5 },
    { id_subcategoria: 10, nombre: 'Juegos de mesa', id_categoria: 5 }
  ];

  editarSubcategoria(id: number) {
    alert(`Editar subcategoría con ID: ${id}`);
  }

  eliminarSubcategoria(id: number) {
    alert(`Eliminar subcategoría con ID: ${id}`);
  }

  consultarSubcategoria(id: number) {
    alert(`Consultar subcategoría con ID: ${id}`);
  }
}
