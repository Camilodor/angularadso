import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  usuarios = [
    { id: 1, nombre: 'Juan Pérez', telefono: '123456789', rol: 'Administrador' },
    { id: 2, nombre: 'Ana López', telefono: '987654321', rol: 'Bodeguero' },
    { id: 3, nombre: 'Carlos Ruiz', telefono: '456789123', rol: 'Conductor' },
    { id: 4, nombre: 'Marta Díaz', telefono: '321654987', rol: 'Administrador' },
    { id: 5, nombre: 'Luis Gómez', telefono: '789123456', rol: 'Bodeguero' },
    { id: 6, nombre: 'Sofía Martínez', telefono: '654789321', rol: 'Conductor' },
    { id: 7, nombre: 'Pedro Fernández', telefono: '112233445', rol: 'Administrador' },
    { id: 8, nombre: 'Carla Sánchez', telefono: '998877665', rol: 'Bodeguero' },
    { id: 9, nombre: 'Diego Torres', telefono: '556677889', rol: 'Conductor' },
    { id: 10, nombre: 'Lucía Castro', telefono: '443322110', rol: 'Administrador' }
  ];

  eliminarUsuario(id: number) {
    alert(`Usuario con ID: ${id} eliminado`);
  }

  editarUsuario(id: number) {
    alert(`Editar usuario con ID: ${id}`);
  }

  consultarUsuario(id: number) {
    alert(`Consultar usuario con ID: ${id}`);
  }
}