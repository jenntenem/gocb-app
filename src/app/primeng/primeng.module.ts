import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

var components = [
  CommonModule,
  // PrimeNG
  InputTextModule,
  InputTextareaModule,
  PasswordModule,
  ButtonModule
];

@NgModule({
  declarations: [],
  imports: components,
  exports: components
})
export class PrimengModule { }
