import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, public actionSheetController: ActionSheetController) { }
  username: "";
  password: "";
  escolha;
  buscaAluno: "";
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

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

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Login',
      buttons: [
        {
          text: 'Aluno',
          icon: 'person',
          handler: () => {
            this.escolha = 'Aluno';
          }
        }, 
        {
          text: 'Professor',
          icon: 'school',
          handler: () => {
            this.escolha = 'Professor';
          }
        }, 
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            this.escolha = '';
        }
      }
    ]
    });
    await actionSheet.present();
  }

  resetPassword(email: string) {
    this.loginService.resetPassword(email)
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

}
