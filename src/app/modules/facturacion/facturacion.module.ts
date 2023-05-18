// Module: FacturacionModule
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacturacionRoutingModule } from './facturacion-routing.module';

// PrimeNG
import { PrimengModule } from 'src/app/primeng/primeng.module';

// Pages
import { OrdenCompraComponent } from './pages/orden-compra/orden-compra.component';

// Components
@NgModule({
  declarations: [
    OrdenCompraComponent
  ],
  imports: [
    CommonModule,
    FacturacionRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FacturacionModule { }
