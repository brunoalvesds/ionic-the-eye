import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private pickerController: PickerController) { }

  defaultColumnOptions = [
    [
      'Selecione',
      'Aluno',
      'Professor'
    ]
  ];
  username: "";
  password: "";
  escolha: null;
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

  async openPicker(numColumns = 1, numOptions = 5, columnOptions = this.defaultColumnOptions){
    const picker = await this.pickerController.create({
      columns: this.getColumns(numColumns, numOptions, columnOptions),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: (value) => {
            this.escolha = value.col0.text;
            console.log(value);
          }
        }
      ]
    });
    await picker.present();
  }

  getColumns(numColumns, numOptions, columnOptions) {
    let columns = [];
    for (let i = 0; i < numColumns; i++) {
      columns.push({
        name: `col${i}`,
        options: this.getColumnOptions(i, numOptions, columnOptions)
      });
    }
    return columns;
  }
  
  getColumnOptions(columnIndex, numOptions, columnOptions) {
    let options = [];
    for (let i = 0; i < numOptions; i++) {
      options.push({
        text: columnOptions[columnIndex][i % numOptions],
        value: i
      })
    }
    return options;
  }

  resetPassword(email: string) {
    this.loginService.resetPassword(email)
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

}
