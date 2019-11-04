import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-class',
  templateUrl: './register-class.component.html',
  styleUrls: ['./register-class.component.scss'],
})
export class RegisterClassComponent implements OnInit {

  turma: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.turma = this.fb.group({
      curso: ['', Validators.required],
      nomeTurma: ['', Validators.required]
    });
  }

}
