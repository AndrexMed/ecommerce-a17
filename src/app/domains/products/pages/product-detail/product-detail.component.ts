import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '@shared/services/product.service';
import { Product } from '@shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');

  private productService = inject(ProductService);

  constructor() { }

  ngOnInit() {
    if (this.id) {
      this.productService
        .getOneProduct(this.id)
        .subscribe({
          next: (product) => {
            console.log(product)
            this.product.set(product);
            if (product.images.length > 0) {
              this.cover.set(product.images[0])
            }
          },
          error: (error) => {
            console.log(error)
          }
        })
    }
  }

  changeCover(newImg: string){
    this.cover.set(newImg);
  }
}
