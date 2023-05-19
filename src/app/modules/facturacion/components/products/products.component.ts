import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from '../../../mantenimiento/mantenimiento.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = []; // Productos filtrados
  selectedProducts: any[] = []; // Productos seleccionados
  loadProducts: boolean = false;

  // Filtros
  categoryFilter: string = '';
  nameFilter: string = '';
  minPriceFilter: number = 0;
  maxPriceFilter: number = Infinity;

  constructor(private mantenimientoService: MantenimientoService) {}

  ngOnInit() {
    this.getProducts();
  }

  async getProducts() {
    await this.mantenimientoService.getProducts().subscribe({
      next: (res: any) => {
        this.products = res.datos;
        this.filteredProducts = res.datos;

        this.loadProducts = true;
      },
      error: (err: any) => {},
      complete: () => {},
    });
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(
      (product) =>
        this.filterByCategory(product) &&
        this.filterByName(product) &&
        this.filterByPrice(product)
    );
  }

  filterByCategory(product: any) {
    return !this.categoryFilter || product.category === this.categoryFilter;
  }

  filterByName(product: any) {
    return (
      !this.nameFilter ||
      product.name.toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  filterByPrice(product: any) {
    return (
      product.price >= this.minPriceFilter &&
      product.price <= this.maxPriceFilter
    );
  }

  addToDetail(event: any) {
    if (event.isSelected) {
      // Agregar producto a la lista de seleccionados
      const product = { ...event.product };
      if (event.cantidad === 1) {
        product.cantidad_consumir = event.cantidad;
        this.selectedProducts.push(product);
      } else {
        this.selectedProducts.forEach((p) => {
          if (p.id === product.id) {
            p.cantidad_consumir = event.cantidad;
          }
        });
      }
    } else {
      // Remover producto de la lista de seleccionados
      const index = this.selectedProducts.findIndex(
        (p) => p.id === event.product.id
      );
      if (index !== -1) {
        this.selectedProducts.splice(index, 1);
      }
    }
  }
}
