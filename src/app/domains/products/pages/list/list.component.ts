import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products = signal<Product[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);

  constructor() { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => {
      this.products.set(products);
    },
      error => {
        console.log(error)
      })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
