import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss'],
})
export class CallComponent{

  private date = new Date();

  public formattedDate = this.date.toLocaleDateString()

  public cards = [
    {
      'name' : 'Joao Silva',
      'ra' : '81712259',
      'image' : 'https://png.pngtree.com/svg/20161205/person_25302.png',
      'presence' : null
    },
    {
      'name' : 'Maria Aparecida',
      'ra' : '81712259',
      'image' : 'https://png.pngtree.com/svg/20161205/person_25302.png',
      'presence' : null
    },
    {
      'name' : 'Paulo Velozo',
      'ra' : '81712259',
      'image' : 'https://png.pngtree.com/svg/20161205/person_25302.png',
      'presence' : null
    },
    {
      'name' : 'Aron Bado',
      'ra' : '81712259',
      'image' : 'https://png.pngtree.com/svg/20161205/person_25302.png',
      'presence' : null
    },
    {
      'name' : 'Simas Turbando',
      'ra' : '81712259',
      'image' : 'https://png.pngtree.com/svg/20161205/person_25302.png',
      'presence' : null
    },
  ]

  public presenceList = [];

  constructor(private navCtrl: NavController) { }

  public answerCall(event, index: number): void {

    if (event) {
      // Seta a presença do aluno que foi adicionado como true
      this.cards[index].presence = true
    }
    else {
      // Seta a presença do aluno que foi adicionado como false
      this.cards[index].presence = false
    }

    //Adiciona o aluno a uma segunda lista que irá conter as presenças e faltas
    this.presenceList.push(this.cards[index])


    //Remove o card da pilha
    this.cards.splice(index, 1);

    console.table(this.presenceList)
  
        
  }

  public direction(event, index) {

    //Adiciona o aluno a uma segunda lista que irá conter as presenças e faltas
    this.presenceList.push(this.cards[index])

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

}
