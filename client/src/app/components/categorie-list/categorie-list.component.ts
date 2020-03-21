import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { CategorieFormComponent } from './categorie-form.component';

import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { Categorie } from '../../models/Categorie';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})

export class CategorieListComponent implements OnInit {
  p = 1;
  categorias: any = [];
  categorie: Categorie;

  CategorieFormComponent: MatDialogRef<CategorieFormComponent>;


  constructor(private categorieService: CategoriesService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categorieService.getCategories().subscribe(
      res => {
        this.categorias = res;
      },
      err => console.log(err)
    );
  }


  openDialog(id: number) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '275px';
    dialogConfig.width = '400px';

    dialogConfig.data = {
      title: 'Categoria',
      categorie_id: 0,
      name: '',
      description: ''
    };

    if (id > 0) {
      this.categorieService.getCategorie(id.toString()).subscribe(
        res => {
          dialogConfig.data.name = res[0].name;
          dialogConfig.data.description = res[0].description;
          dialogConfig.data.categorie_id = res[0].categorie_id;
        },
        err => {
          console.log(err);
        }
      );
    }

    this.CategorieFormComponent = this.dialog.open(CategorieFormComponent, dialogConfig);

    this.CategorieFormComponent.afterClosed().subscribe(
        data => {
        if (data) {
          this.categorie = data;
          if (id === 0) {
          this.categorieService.saveCategorie(this.categorie).subscribe(
            res => {
              console.log(res);
              this.getCategories();
            },
            err => {
              console.log(err);
            }
          );
          } else {
            this.categorieService.updateCategorie(id.toString(), this.categorie).subscribe(
              res => {
                console.log(res);
                this.getCategories();
              },
              err => {
                console.log(err);
              }
            );
          }

        }
      }
      );

  }

  deleteCategorie(id: string) {
    this.categorieService.deleteCategorie(id).subscribe(
      res => {
        console.log(res);
        this.getCategories();
      },
      err => {
        console.log(err);
      }
      );
  }

}
