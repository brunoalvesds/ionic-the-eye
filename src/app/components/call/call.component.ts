import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListClassesComponent } from '../list-classes/list-classes.component';
import { map } from 'rxjs/operators';
import { ListCallsService } from 'src/app/services/list-calls.service';

@Component({
	selector: 'app-call',
	templateUrl: './call.component.html',
	styleUrls: ['./call.component.scss'],
})
export class CallComponent {

	today = new Date();
	dd = this.today.getDate();
	mm = this.today.getMonth() + 1; //January is 0!

	yyyy = this.today.getFullYear();
	formattedDate = this.dd + "-" + this.mm + "-" + this.yyyy;
	startCall: boolean = false;
	callFinished: boolean = false;
	studentsList;
	selectedClass;
	selectedLesson;
	classes;

	public presenceList = [];

	constructor(private navCtrl: NavController, private http: HttpClient, private db: AngularFireDatabase, private listCallsService: ListCallsService) {
		this.getStudents();
	}

	public answerCall(event, index: number): void {

		if (event) {
			// Seta a presença do aluno que foi adicionado como true
			this.studentsList[index].presence = true
		}
		else {
			// Seta a presença do aluno que foi adicionado como false
			this.studentsList[index].presence = false
		}

		//Adiciona o aluno a uma segunda lista que irá conter as presenças e faltas
		this.presenceList.push(this.studentsList[index])


		//Remove o card da pilha
		this.studentsList.splice(index, 1);


	}

	public direction(event, index) {

		//Adiciona o aluno a uma segunda lista que irá conter as presenças e faltas
		this.presenceList.push(this.studentsList[index])

		if (event) {
			// Seta a presença do aluno que foi adicionado como true
			this.presenceList[index].presence = true
		}
		else {
			// Seta a presença do aluno que foi adicionado como false
			this.presenceList[index].presence = false
		}

	}

	public goBack() {
		this.navCtrl.back();
	}

	searchClass() {
		this.startCall = true;
		this.studentsList = this.classes[this.selectedClass].alunos;
	}

	getStudents() {

		const API_URL = 'https://the-eye-7810a.firebaseio.com/USERS/0/TURMAS.json?auth=Nwwhyn7ghzhktKDVaxqEnYbWmy3qXua7jwqnYp4R';
		return new Promise((resolve, reject) => {
			this.http.get(API_URL)
				.subscribe((result: any) => {
					console.log("Turma: ", result);
					this.classes = result;
				},
					(error) => {
						reject(JSON.stringify(error));
					});
		});
	}

	insertCall() {
		this.callFinished = true
		const API_URL = 'https://the-eye-7810a.firebaseio.com/USERS/0/TURMAS/' + this.selectedClass + '/AULAS/' + this.selectedLesson + '.json?auth=Nwwhyn7ghzhktKDVaxqEnYbWmy3qXua7jwqnYp4R';
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'Authorization': 'Nwwhyn7ghzhktKDVaxqEnYbWmy3qXua7jwqnYp4R'
			})
		};
		let sendData = {};
		sendData[this.formattedDate] = this.presenceList;

		//Send to Service
		let sendToService = {};
		sendToService["data"] = this.formattedDate;
		sendToService["alunos"] = this.presenceList;

		this.listCallsService.addCall(sendToService);



		let sendDataString = JSON.stringify(sendData).toString();
		console.log('API Send : ', sendDataString);

		return new Promise((resolve, reject) => {
			this.http.post(API_URL, sendDataString)
				.toPromise()
				.then((response) => {
					console.log('API Response : ', response);
					console.log('API Send : ', sendData);
					resolve(response);
				})
				.catch((error) => {
					console.error('API Error : ', error.status);
					console.error('API Error : ', JSON.stringify(error));
					reject(JSON.stringify(error));
				});
		});

		

	}
}
