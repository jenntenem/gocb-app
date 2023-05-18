import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  sidebarVisible: boolean = true;
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Facturación',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Generar Orden de Compra',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Reporte de ventas',
            icon: 'pi pi-fw pi-external-link',
          },
        ],
      },
      {
        label: 'Mantenimiento',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Clientes',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Productos',
            icon: 'pi pi-fw pi-align-right',
          },
        ],
      },
      {
        label: 'Administración',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Permisos',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Roles',
            icon: 'pi pi-fw pi-user-minus',
          },
        ],
      },
    ];
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
