import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';

var components = [
  CommonModule,
  // PrimeNG
  InputTextModule,
  InputTextareaModule,
  PasswordModule,
  ButtonModule,
  SidebarModule,
  PanelMenuModule,
  BrowserAnimationsModule,
  MenubarModule,
];

@NgModule({
  declarations: [],
  imports: components,
  exports: components
})
export class PrimengModule { }
