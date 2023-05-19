import { Component, OnInit, ViewChild } from '@angular/core';
import { Factura, Cliente } from '../../models/factura.model';
import { MantenimientoService } from '../../../mantenimiento/mantenimiento.service';
import { ProductsComponent } from '../../components/products/products.component';
@Component({
  selector: 'app-orden-compra',
  templateUrl: './orden-compra.component.html',
})
export class OrdenCompraComponent implements OnInit {
  factura?: Factura;

  @ViewChild('productsSelected', { static: false })
  productsSelected?: ProductsComponent;

  constructor(private mantenimientoService: MantenimientoService) {}

  ngOnInit() {}

  get Products() {
    return this.productsSelected?.selectedProducts ?? [];
  }
}
