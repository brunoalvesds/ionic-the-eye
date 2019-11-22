import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'modal-page',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss']
})
export class ModalPage implements OnInit {

  @Input() registroAluno: number;
  ra;
  classes;
  student;
  notFound: boolean = false;

  constructor(navParams: NavParams, private modalCtrl: ModalController, private http: HttpClient) {
    this.ra = navParams.get('RA');
  }

  ngOnInit() {
    this.getStudents();  
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  getStudents() {

    const API_URL = 'https://the-eye-7810a.firebaseio.com/USERS/0/TURMAS.json?auth=Nwwhyn7ghzhktKDVaxqEnYbWmy3qXua7jwqnYp4R';
    return new Promise((resolve, reject) => {
      this.http.get(API_URL)
        .subscribe((result: any) => {
          console.log("Turma: ", result);
          this.classes = result;
          this.findStudent();
          this.countPresence()
          console.log(this.classes)
        },
          (error) => {
            reject(JSON.stringify(error));
          });
    });
  }

  findStudent() {
    this.classes[3].alunos.forEach(student => {
      if(student.ra == this.ra) {
        this.student = student;
        console.log(this.student);
      }
    });
  }

  countPresence() {
    this.classes.forEach(turma => {
      this.classes[3].forEach( aula => [
        console.log(aula)
      ]);
    });
  }
  
}