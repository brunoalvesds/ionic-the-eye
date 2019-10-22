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
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(data => {
        this.router.navigateByUrl('home');
      })
      .catch(error => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        this.toast.present(errorMessage);
      });
  }

  doGoogleLogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(data => {
        this.router.navigateByUrl('home');
      })
      .catch(error => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        this.toast.present(errorMessage);
      });
  }

}
