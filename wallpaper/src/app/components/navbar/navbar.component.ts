import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  favoriteImages!: Image[];

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('favoriteImages')) {
      let images = JSON.parse(localStorage.getItem('favoriteImages')!);
      this.imageService.setFavoriteImages(images);
    }
    this.favoriteImages = this.imageService.getFavoriteImages();
  }

  

}
