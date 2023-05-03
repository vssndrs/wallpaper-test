import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  imagePrefix = environment.imagePrefix;
  thumbPrefix = environment.thumbPrefix;
  images!: Image[];
  numberOfImages = this.imageService.getFavoriteImages().length;
  numberOfPages = Math.ceil(this.numberOfImages / 10);
  pageIndex = 0;
  pageSize = 10;
  chosenImage!: Image;
  pageEvent?: PageEvent;

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.getImages(this.pageIndex);
    this.chosenImage = this.images[0];
  }

  getImages(pageIndex: number) {
    this.images = this.imageService.getFavoriteImages(pageIndex + 1);
  }

  chooseImage(image: Image) {
    this.chosenImage = image;
  }

  removeFromFav(image: Image) {
    this.imageService.removeFavoriteImage(image);
    this.images = this.imageService.getFavoriteImages(this.pageIndex + 1);
    this.numberOfImages = this.imageService.getFavoriteImages().length;
    this.chosenImage = this.images[0];
  }

  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.getImages(this.pageIndex);
  }

  clearFavorites() {
    this.imageService.clearFavoriteImages();
    this.images = this.imageService.getFavoriteImages();
    this.chosenImage = this.images[0];
  }

}
