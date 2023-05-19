import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
// Components
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NotFoundError } from 'rxjs';

const routes: Routes = [
  {
    path: 'sistema',
    component: InicioComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'mantenimiento',
        loadChildren: () => import('./modules/mantenimiento/mantenimiento.module').then(m => m.MantenimientoModule)
      },
      {
        path: 'facturacion',
        loadChildren: () => import('./modules/facturacion/facturacion.module').then(m => m.FacturacionModule)
      }
    ],
  },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
