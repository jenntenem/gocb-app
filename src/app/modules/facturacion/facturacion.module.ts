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
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsSellingComponent } from './components/products-selling/products-selling.component';

@NgModule({
  declarations: [
    OrdenCompraComponent,
    ProductComponent,
    ProductsComponent,
    ProductsSellingComponent,
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
