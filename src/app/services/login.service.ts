import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private router: Router, private toast: ToastService, public afAuth: AngularFireAuth) {
   }

  onLogin(email, password) {

    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(data => {
        this.router.navigateByUrl('home');
      })
      .catch(error => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        this.toast.present(errorMessage);
      });
  }

  doLogout() {
    firebase.auth().signOut()
		.then(() => {
			this.router.navigateByUrl('login');
		})
		.catch(error => {
			this.toast.present(error.message);
		});
  }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      console.log(provider);
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          console.log(res);
          resolve(res);
          this.router.navigateByUrl('home');
        }, err => {
          console.log(err);
          this.toast.present('Login inválido.');
          reject(err);
        })
    })
  }

  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
        this.router.navigateByUrl('home');
      }, error => {
        this.toast.present('Login inválido.');
        reject(error);
      })
    })
  }

  resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => 
        this.toast.present('Verifique seu email.'))
      .catch((error) => 
      this.interpretErrorMessage(error))
  }

  interpretErrorMessage(error) {
    var errorMessage = '';
    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage = 'Erro: O email está mal formatado.'
        this.toast.present(errorMessage);
        break;
      case 'auth/user-not-found':
        errorMessage = 'Erro: Nenhum usuário foi encontrado com o email digitado. O usuário pode ter sido deletado.'
        this.toast.present(errorMessage);
        break;
      default:
        errorMessage = 'Erro: Verifique sua conexão com a internet.'
        this.toast.present(errorMessage);
        break;
    }
    return errorMessage;
  }

}
