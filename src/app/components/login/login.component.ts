import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ActionSheetController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user: FormGroup;
  student: FormGroup;
  escolha;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  validRa = false;

  constructor(
    private loginService: LoginService,
    public actionSheetController: ActionSheetController,
    private fb: FormBuilder,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.user = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.student = this.fb.group({
      ra: ['', [Validators.required, Validators.minLength(7)]]
    });
  }

  login() {
    // console.log(this.user)
    this.loginService.onLogin(this.user.value.email, this.user.value.password);
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
            this.user.value.email = '';
            this.user.value.password = '';
            this.student.value.ra = '';
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

  async searchStudent() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        'RA': this.student.value.ra
      }
    });
    return await modal.present();
  }
}
