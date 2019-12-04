import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListCallsService } from 'src/app/services/list-calls.service';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.scss'],
})
export class EditClassComponent implements OnInit {
  lista: any;
  aulas: any;


  constructor(private http: HttpClient, private callService: ListCallsService) { }

  ngOnInit() {
    this.getAll();

    this.callService._aulas.subscribe(result => {
      setTimeout(() => {
        this.aulas = result;

        console.log("aulas: ", this.aulas);
      }, 1000);
    });
  }

  getAll() {
    const API_URL = 'https://the-eye-7810a.firebaseio.com/USERS/0/TURMAS.json?auth=Nwwhyn7ghzhktKDVaxqEnYbWmy3qXua7jwqnYp4R'
    return new Promise((resolve, reject) => {
      this.http.get(API_URL)
        .subscribe((result: any) => {
          console.log("eae: ", result);
          this.lista = result;
        },
          (error) => {
            reject(error.json());
          });
    });
  }

}
