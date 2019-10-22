import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private toast: ToastService) { }

  ngOnInit() {}

  onLogout() {
		firebase.auth().signOut()
			.then(() => {
				this.router.navigateByUrl('login');
			})
			.catch(error => {
				this.toast.present(error.message);
			});
	}

}
