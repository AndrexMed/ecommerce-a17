import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API_URL = 'https://api.escuelajs.co/api/v1/categories';
  private http = inject(HttpClient);

  constructor() { }

  getAll(){
    return this.http.get<Category[]>(`${this.API_URL}`)
  }
}
