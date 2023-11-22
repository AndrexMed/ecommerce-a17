import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL: string = 'https://api.escuelajs.co/api/v1/products';
  private http = inject(HttpClient);

  constructor() { }

  getAllProducts(category_id?: string) {
    const url = new URL(this.API_URL);
    if (category_id) {
      url.searchParams.set('categoryId', category_id);
    }
    return this.http.get<Product[]>(url.toString());
  }

  getOneProduct(id: string) {
    return this.http.get<Product>(`${this.API_URL}/${id}`)
  }
}
