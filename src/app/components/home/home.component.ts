import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

	constructor(private loginService: LoginService) { }

	ngOnInit() { }

	onLogout() {
		this.loginService.doLogout();
	}

}
