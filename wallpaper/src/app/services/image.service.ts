import { Injectable } from '@angular/core';
import { Image } from '../models/image';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  favoriteImages: Image[] = [];

  constructor(
    private http: HttpClient
  ) { }

  saveFavoriteImage(image: Image): void {
    this.favoriteImages.push(image);
    this.saveFavoriteImages();
  }

  removeFavoriteImage(image: Image): void {
    const itemIndex = this.favoriteImages.findIndex((item: Image) => item.id === image.id);
    this.favoriteImages.splice(itemIndex, 1);
    this.saveFavoriteImages();
  }

  setFavoriteImages(images: Image[]): void {
    this.favoriteImages = images;
  }

  saveFavoriteImages(): void {
    localStorage.setItem('favoriteImages', JSON.stringify(this.favoriteImages));
  }

  clearFavoriteImages(): void {
    this.favoriteImages.splice(0, this.favoriteImages.length);
    localStorage.removeItem('favoriteImages');
  }

  getFavoriteImages(page?: number): Image[] {
    if (page) {
      return this.favoriteImages.slice((page - 1) * 10, page * 10);
    } else {
      return this.favoriteImages;
    }
  }

  getCategories(limit?:number): Observable<Category[]> {
    if (limit) {
      return this.http.get<Category[]>(`http://localhost:3000/categories?_embed=images&_limit=${limit}`);
    }
    return this.http.get<Category[]>('http://localhost:3000/categories?_embed=images');
  }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>('http://localhost:3000/images?_expand=category');
  }

  getImagesByCategory(id: number, page?: number, limit?: number): Observable<Image[]> {
    if (page && limit) {
    return this.http.get<Image[]>(`http://localhost:3000/images?categoryId=${id}&_page=${page}&_limit=${limit}&_expand=category`)
    } else {
      return this.http.get<Image[]>(`http://localhost:3000/images?categoryId=${id}&_expand=category`)
    }
  }

  getImageById(id: number): Observable<Image> {
    return this.http.get<Image>(`http://localhost:3000/images/${id}&_expand=category`);
  }

  getFirstImageByCategory(id: number): Observable<Image[]> {
    return this.http.get<Image[]>(`http://localhost:3000/images?categoryId=${id}&_limit=1&_expand=category`);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`http://localhost:3000/categories/${id}`);
  }

}
