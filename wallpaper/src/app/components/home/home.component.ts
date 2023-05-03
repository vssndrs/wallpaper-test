import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imagePrefix = environment.imagePrefix;
  thumbPrefix = environment.thumbPrefix;
  categories: Category[] = [];
  sliderImages: Image[] = [];


  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.getWideImages();
    this.imageService.getCategories(3).subscribe({
      next: categories => this.categories = categories
    });
  }

  getWideImages() {
    this.imageService.getImages("orientation=wide").subscribe({
      next: images => {
        this.sliderImages = this.shuffleArray(images);
      }
    });
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}
