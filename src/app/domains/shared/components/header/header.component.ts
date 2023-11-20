import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  hideSideMenu = signal(true);

  @Input({ required: true }) cart: Product[] = [];

  total = signal(0);

  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];
    if (cart) {
      this.total.set(this.calcTotal())
    }
  }

  toggleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

  calcTotal() {
    return this.cart.reduce((total, product) => total + product.price, 0)
  }

}
