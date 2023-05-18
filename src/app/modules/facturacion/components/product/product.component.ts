import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  product: any = {};
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
      default:
        return 'primary';
    }
  }

  onAdd() {
    this.cantidad++;
  }

  cantidadProducto(status: number) {
    status === 1 ? this.cantidad++ : this.cantidad--;
  }
}
