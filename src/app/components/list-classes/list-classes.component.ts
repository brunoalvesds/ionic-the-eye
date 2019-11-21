import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-classes',
  templateUrl: './list-classes.component.html',
  styleUrls: ['./list-classes.component.scss'],
})
export class ListClassesComponent implements OnInit {
  lista: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    const API_URL = 'https://the-eye-7810a.firebaseio.com/TURMAS.json?auth=Nwwhyn7ghzhktKDVaxqEnYbWmy3qXua7jwqnYp4R'
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
