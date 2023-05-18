import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NotFoundError } from 'rxjs';

const routes: Routes = [
  {
    path: 'sistema',
    component: InicioComponent,
    children: [
      {
        path: 'mantenimiento',
        loadChildren: () => import('./modules/mantenimiento/mantenimiento.module').then(m => m.MantenimientoModule)
      }
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
