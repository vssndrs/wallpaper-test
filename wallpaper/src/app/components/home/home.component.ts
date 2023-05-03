import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
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


  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.imageService.getCategories(3).subscribe({
      next: categories => this.categories = categories
    })
  }

}
