import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { CategorieFormComponent } from './categorie-form.component';

import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})

export class CategorieListComponent implements OnInit {
  p = 1;
  categorias: any = [];

  CategorieFormComponent: MatDialogRef<CategorieFormComponent>;


  constructor(private categorieService: CategoriesService, private dialog: MatDialog) { }

  ngOnInit() {
    this.categorieService.getCategories().subscribe(
      res => {
        this.categorias = res;
      },
      err => console.log(err)
    );
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    this.CategorieFormComponent = this.dialog.open(CategorieFormComponent, dialogConfig);

    this.CategorieFormComponent.afterClosed().subscribe(
        data => console.log('Dialog output:', data)
      );

  }
}
