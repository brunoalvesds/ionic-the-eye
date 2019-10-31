import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {


  newUser: FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.newUser = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  registerUser(user) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
  }

}
