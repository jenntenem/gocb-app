// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Pages
import { ClientesComponent } from './pages/clientes/clientes.component';

// Components

// PrimeNG
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { AggModClienteComponent } from './components/agg-mod-cliente/agg-mod-cliente.component';

@NgModule({
  declarations: [
    ClientesComponent,
    AggModClienteComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MantenimientoModule { }
