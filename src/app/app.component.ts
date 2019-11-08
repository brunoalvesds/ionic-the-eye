import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { Platform, AlertController, IonMenu, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import firebaseConfig from './../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth: AngularFireAuth,
    private router: Router,
    private loginService: LoginService,
    private alertCtrl: AlertController,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
      // firebase.initializeApp(firebaseConfig);
    });
  }

  async onLogout() {
    const alert = await this.alertCtrl.create({
      header: 'Deseja realmente sair?',
      message: 'Dados não salvos podem ser perdidos!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirmed Cancel');
          }
        }, {
          text: 'Sair',
          handler: () => {
            this.loginService.doLogout();
            if (this.menuCtrl.isOpen) {
              this.menuCtrl.close();
            }
          }
        }
      ]
    });
    await alert.present();
  }

  direcionar(local) {
    switch (local) {
      case 'call':
        if (this.menuCtrl.isOpen) {
          this.menuCtrl.close();
        }
        this.router.navigateByUrl(local);
        break;
      case 'register-class':
        if (this.menuCtrl.isOpen) {
          this.menuCtrl.close();
        }
        this.router.navigateByUrl(local);
        break;
      case 'register-student':
        if (this.menuCtrl.isOpen) {
          this.menuCtrl.close();
        }
        this.router.navigateByUrl(local);
        break;
      case 'terms':
          if (this.menuCtrl.isOpen) {
            this.menuCtrl.close();
          }
          this.router.navigateByUrl(local);
          break;
      default:
        if (this.menuCtrl.isOpen) {
          this.menuCtrl.close();
        }
        this.router.navigateByUrl(local);
        break;
    }
  }
}
