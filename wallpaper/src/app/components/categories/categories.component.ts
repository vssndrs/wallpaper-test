import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ImageService } from 'src/app/services/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  imagePrefix = environment.imagePrefix;
  thumbPrefix = environment.thumbPrefix;
  categories: Category[] = [];

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.imageService.getCategories().subscribe({
      next: categories => this.categories = categories
    })
  }

}
