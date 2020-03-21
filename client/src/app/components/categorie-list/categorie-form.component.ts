import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categorie } from '../../models/Categorie';

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<CategorieFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Categorie) {
    }

  ngOnInit() {
  }

    close() {
      this.dialogRef.close();
    }

}
