import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../models/Categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(`${this.API_URI}/categorias`);
  }

  getCategorie(id: string) {
    return this.http.get(`${this.API_URI}/categorias/${id}`);
  }

  deleteCategorie(id: string) {
    return this.http.delete(`${this.API_URI}/categorias/${id}`);
  }

  saveCategorie(categorie: Categorie) {
    return this.http.post(`${this.API_URI}/categorias`, categorie);
  }

  updateCategorie(id: string, categorie: Categorie): Observable<any> {
    return this.http.put(`${this.API_URI}/categorias/${id}`, categorie);
  }

}
