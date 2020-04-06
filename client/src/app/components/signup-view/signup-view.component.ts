import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
 
@Component({
  selector: 'app-signup-view',
  templateUrl: './signup-view.component.html',
  styleUrls: ['./signup-view.component.css']
})
export class SignupViewComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  google() {
    this.authService.google().subscribe(res => {
      console.log(res);
    });
  }

}
