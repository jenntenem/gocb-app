import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-agg-mod-cliente',
  templateUrl: './agg-mod-cliente.component.html',
})
export class AggModClienteComponent implements OnInit {
  @Input() visible?: boolean;
  @Input() tipo_registro?: number;
  @Input() cliente?: any;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  title: string = '';

  constructor() {}

  ngOnInit(): void {}

  onShow() {
    this.title = this.tipo_registro == 1 ? 'Agregar' : 'Modificar';
  }

  onHide() {
    this.onClose.emit();
  }
}
