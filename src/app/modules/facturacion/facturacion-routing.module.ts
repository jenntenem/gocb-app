import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdenCompraComponent } from './pages/orden-compra/orden-compra.component';

const routes: Routes = [
  { path: 'orden-compra', component: OrdenCompraComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturacionRoutingModule { }
