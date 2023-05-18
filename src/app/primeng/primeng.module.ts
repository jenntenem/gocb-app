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
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TagModule } from 'primeng/tag';

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
  DialogModule,
  CardModule,
  KeyFilterModule,
  InputMaskModule,
  CalendarModule,
  TabViewModule,
  AutoCompleteModule,
  TagModule,
];

@NgModule({
  declarations: [],
  imports: components,
  exports: components,
  providers: [MessageService, ConfirmationService],
})
export class PrimengModule {}
