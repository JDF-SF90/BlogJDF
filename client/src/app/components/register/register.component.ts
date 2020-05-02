import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

registrar() {

  this.user = this.dataUser;

  this.authService.register(this.user).subscribe(
    res => { console.log(res);
             this.authService.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn, res.dataUser.ual);
             this.router.navigate(['/']);
    },
    err => { console.log(err); }
  );
  }

}
