import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html'
})
export class CategorieFormComponent implements OnInit {

    form: FormGroup;
    description: string;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CategorieFormComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.description = data.description;
    }

  ngOnInit() {
    this.form = this.fb.group({
        description: this.description
        });
  }

      save() {
    this.dialogRef.close(this.form.value);
    }

    close() {
    this.dialogRef.close();
    }

}