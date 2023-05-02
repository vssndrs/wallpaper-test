import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  imagePrefix = environment.imagePrefix;
  thumbPrefix = environment.thumbPrefix;
  categoryId = this.activatedRoute.snapshot.params['id'];
  numberOfImages = 0;
  numberOfPages = 0;
  pageIndex = 0;
  pageSize = 5;
  images : Image[] = [];
  chosenImage!: Image;

  pageEvent?: PageEvent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.getlength();
    this.getImages(this.categoryId, this.pageIndex, this.pageSize);
  }

  getImages(categoryId: number, pageIndex: number, pageSize: number | undefined) {
    this.imageService.getImagesByCategory(categoryId, pageIndex + 1, pageSize).subscribe({
      next: images => {
        this.images = images;
        this.chosenImage = images[0];
      }
    });
  }

  downloadImage(image: Image) {
    // download image
    const link = document.createElement('a');
    link.href = this.imagePrefix + image.url;
    link.download = image.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  chooseImage(image: Image) {
    this.chosenImage = image;
  }

  getlength() {
    this.imageService.getImagesByCategory(this.categoryId).subscribe({
      next: images => {
        this.numberOfImages = images.length;
        this.numberOfPages = Math.ceil(this.numberOfImages / this.pageSize);
      }
    });
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.numberOfImages = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getImages(this.categoryId, this.pageIndex, this.pageSize);
  }

}
