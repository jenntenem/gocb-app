import { Component, OnInit } from '@angular/core';

interface Cliente {
  id: number;
  identificacion: string;
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
  estado_registro: boolean;
  estado: string;
}
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  // styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clients: Cliente[] = [];
  cols: any[] = [];

  // Dialog Agregar/Modificar Cliente
  visibleDialog: boolean = false;
  tipo_registro?: number; // 1: Agregar, 2: Modificar

  constructor() {}

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'identificacion', header: 'identificacion', align: 'center' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'email', header: 'Correo' },
      { field: 'telefono', header: 'Telefono', align: 'center' },
      { field: 'direccion', header: 'Direccion' },
      { field: 'estado', header: 'Estado', align: 'center' },
      { field: 'acciones', header: 'Acciones', align: 'center' },
    ];

    this.clients = [
      {
        id: 1,
        identificacion: '123456789',
        nombre: 'Juan Perez',
        email: 'example@example.com',
        telefono: '123456789',
        direccion: 'Calle 123',
        estado: 'Activo',
        estado_registro: true,
      },
    ];
  }

  onAdd() {
    this.tipo_registro = 1;
    this.visibleDialog = true;
  }

  onEdit(cliente: Cliente) {
    this.tipo_registro = 2;
    this.visibleDialog = true;
  }

  onDelete(cliente: Cliente) {}

  onCloseDialog(event: any) {
    this.visibleDialog = false;
  }
}
