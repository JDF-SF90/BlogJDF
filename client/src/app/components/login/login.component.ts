import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  dataUser = {
    id: 0,
    name: '',
    password: '',
    email: ''
  };

  user: User;


constructor(private authService: AuthService, private router: Router) { }

ngOnInit() {
  }

getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Es necesario un correo.';
    }

    return this.email.hasError('email') ? 'Email no valido' : '';
  }

logIn() {

  this.user = this.dataUser;

  this.authService.login(this.user).subscribe(
    res => { console.log(res);
             this.authService.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn, res.dataUser.ual);
             this.router.navigate(['/']);
    },
    err => { console.log(err); }
  );
  }

}
