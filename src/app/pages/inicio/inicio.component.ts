import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  sidebarVisible: boolean = true;
  items: MenuItem[] = [];
  username: string = '';

  constructor(private router: Router,) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const menu = JSON.parse(localStorage.getItem('menu') || '{}');

    this.username = user.user;
    this.items = menu;

    /* ! Ejemplo de menu
     this.items = [
      {
        label: 'Facturación',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Generar Orden de Compra',
            icon: 'pi pi-fw pi-plus',
            routerLink: "/sistema/facturacion/orden-compra"
          },
          {
            label: 'Reporte de ventas',
            icon: 'pi pi-fw pi-external-link',
            routerLink: "/sistema/facturacion/reporte-ventas"
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
            routerLink: "/sistema/mantenimiento/clientes"
          },
          {
            label: 'Productos',
            icon: 'pi pi-fw pi-align-right',
            routerLink: "/sistema/mantenimiento/productos"
          },
        ],
      },
      {
        label: 'Administración',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            "label": "Usuarios",
            "icon": "pi pi-fw pi-user-plus",
            "routerLink": "/sistema/administracion/usuarios"
          },
          {
            label: 'Permisos',
            icon: 'pi pi-fw pi-user-plus',
            "routerLink": "/sistema/administracion/permisos"
          },
          {
            label: 'Roles',
            icon: 'pi pi-fw pi-user-minus',
            "routerLink": "/sistema/administracion/roles"
          },
        ],
      },
    ];
    */
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('isLogging');
    localStorage.removeItem('menu');
    this.router.navigateByUrl('/login');
  }
}
