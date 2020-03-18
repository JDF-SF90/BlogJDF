import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';


@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {
  p = 1;
  categorias: any = [];

  constructor(private categorieService: CategoriesService) { }

  ngOnInit() {
    this.categorieService.getCategories().subscribe(
      res => {
        this.categorias = res;
      },
      err => console.log(err)
    );
  }

}