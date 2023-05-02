import { Injectable } from '@angular/core';
import { Image } from '../models/image';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/categories?_embed=images');
  }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>('http://localhost:3000/images?_expand=category');
  }

  getImagesByCategory(id: number, page?: number, limit?: number): Observable<Image[]> {
    if (page && limit) {
    return this.http.get<Image[]>(`http://localhost:3000/images?categoryId=${id}&_page=${page}&_limit=${limit}`)
    } else {
      return this.http.get<Image[]>(`http://localhost:3000/images?categoryId=${id}`)
    }
  }

  getImageById(id: number): Observable<Image> {
    return this.http.get<Image>(`http://localhost:3000/images/${id}`);
  }

}
