import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  username: "";
  password: "";
  escolha: null;
  buscaAluno: "";

  ngOnInit() {
  }

  login() {
    this.loginService.onLogin(this.username, this.password);
  }

  loginFacebook() {
    this.loginService.doFacebookLogin();
  }

  loginGoogle() {
    this.loginService.doGoogleLogin();
  }

}
