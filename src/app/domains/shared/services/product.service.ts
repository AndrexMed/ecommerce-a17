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

  getAllProducts() {
    return this.http.get<Product[]>(`${this.API_URL}`)
  }

  getOneProduct(id: string) {
    return this.http.get<Product>(`${this.API_URL}/${id}`)
  }
}
