import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  newProfessor: FormGroup;
  disableBtn;

  constructor(private fb : FormBuilder, private toast: ToastService, private router: Router) { }

  ngOnInit() {
    this.newProfessor = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
  }

  registerUser(user) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(user.value.email, user.value.password)
      .then(res => this.router.navigateByUrl('login'))
      .catch(err => this.toast.present(err))
    })
  }

  checkPassword(password, confirmPassword) {
    if (confirmPassword != password) {
      this.disableBtn = true;
      this.toast.present("Verifique sua senha");
    }
  }
}
