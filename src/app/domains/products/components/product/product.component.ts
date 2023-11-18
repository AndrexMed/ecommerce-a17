import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input({required:true}) img: string = "";
  @Input({required:true}) price: number = 0;
  @Input({required:true}) title: string = '';

  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    console.log("Click from child");
    this.addToCart.emit("hola este es un mensaje desde el hijo"+ this.title)
  }
}
