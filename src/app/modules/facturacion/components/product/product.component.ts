import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  @Input() product: any = {};
  @Output() addToDetail = new EventEmitter<any>();

  cantidad: number = 0;
  constructor() {}

  ngOnInit() {}

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      case 'INACTIVO':
        return 'danger';
      default:
        return 'primary';
    }
  }

  onAdd() {
    this.cantidadProducto(1);
  }

  cantidadProducto(status: number) {
    status === 1 ? this.cantidad++ : this.cantidad--;

    this.addToDetail.emit({
      product: this.product,
      cantidad: this.cantidad,
      isSelected: this.cantidad > 0,
    });
  }
}
