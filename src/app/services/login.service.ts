import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private router: Router, private toast: ToastService, public afAuth: AngularFireAuth) { }

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

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      console.log(provider);
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          console.log(res);
          resolve(res);
        }, err => {
          console.log(err);
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
      })
    })
  }

}
