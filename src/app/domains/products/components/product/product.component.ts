import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input({required:true}) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    console.log("Click from child");
    this.addToCart.emit(this.product)
  }
}
