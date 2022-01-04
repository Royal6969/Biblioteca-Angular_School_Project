import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.user);

    const { email, password } = this.user; // destructuring
    
    this.authService.login(email, password).then((res) => {
      console.log("Se registró: ", res);
    })
  }

  loginWithGoogle() {
    console.log(this.user);

    const { email, password } = this.user; // destructuring
    
    this.authService.loginWithGoogle(email, password).then((res) => {
      console.log("Se registró: ", res);
    })
  }

  getUserInfo() {
    this.authService.getUserInfo()
      .subscribe((res) => {
        console.log(res?.email);
      });
  }

  logout() {
    this.authService.logout();
  }

}
