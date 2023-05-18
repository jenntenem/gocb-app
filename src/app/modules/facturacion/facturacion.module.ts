// Module: FacturacionModule
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacturacionRoutingModule } from './facturacion-routing.module';

// PrimeNG
import { PrimengModule } from 'src/app/primeng/primeng.module';

// Components

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FacturacionRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FacturacionModule { }
