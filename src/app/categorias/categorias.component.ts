import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  categorias = [
    { id_categoria: 1, nombre: 'Electrónica', proveedor: 'Proveedor A' },
    { id_categoria: 2, nombre: 'Ropa', proveedor: 'Proveedor B' },
    { id_categoria: 3, nombre: 'Alimentos', proveedor: 'Proveedor C' },
    { id_categoria: 4, nombre: 'Hogar', proveedor: 'Proveedor D' },
    { id_categoria: 5, nombre: 'Juguetes', proveedor: 'Proveedor E' },
    { id_categoria: 6, nombre: 'Belleza', proveedor: 'Proveedor F' },
    { id_categoria: 7, nombre: 'Libros', proveedor: 'Proveedor G' },
    { id_categoria: 8, nombre: 'Herramientas', proveedor: 'Proveedor H' },
    { id_categoria: 9, nombre: 'Deportes', proveedor: 'Proveedor I' },
    { id_categoria: 10, nombre: 'Automóvil', proveedor: 'Proveedor J' }
  ];

  editarCategoria(id: number) {
    alert(`Editar categoría con ID: ${id}`);
  }

  eliminarCategoria(id: number) {
    alert(`Eliminar categoría con ID: ${id}`);
  }

  consultarCategoria(id: number) {
    alert(`Consultar categoría con ID: ${id}`);
  }
}
