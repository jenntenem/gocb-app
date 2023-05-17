import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';

var components = [
  CommonModule,
  // PrimeNG
  InputTextModule,
];

@NgModule({
  declarations: [],
  imports: components,
  exports: components
})
export class PrimengModule { }
