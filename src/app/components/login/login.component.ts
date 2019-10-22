import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {}

  login(email, senha) {
    this.loginService.onLogin(email, senha);
  }

  loginFacebook() {
    this.loginService.doFacebookLogin();
  }

  loginGoogle() {
    this.loginService.doGoogleLogin();
  }

}
