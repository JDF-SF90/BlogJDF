import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

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
