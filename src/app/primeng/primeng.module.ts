import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { DividerModule } from 'primeng/divider';

var components = [
  CommonModule,
  // PrimeNG
  InputTextModule,
  InputTextareaModule,
  PasswordModule,
  ButtonModule,
  SidebarModule,
  PanelMenuModule,
  MenubarModule,
  TableModule,
  DividerModule,
];

@NgModule({
  declarations: [],
  imports: components,
  exports: components,
  providers: [
    MessageService,
    ConfirmationService,
  ],
})
export class PrimengModule { }
