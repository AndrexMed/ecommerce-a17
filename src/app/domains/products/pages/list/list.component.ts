import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  img = "https://picsum.photos/420/420?r=" + Math.random();

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 30000,
        image: 'https://picsum.photos/420/420?r=1',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 30000,
        image: 'https://picsum.photos/420/420?r=2',
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  addToCart(product: Product) {
    this.cart.update(prevState => [...prevState, product])
  }
}
