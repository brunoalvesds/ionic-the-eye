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
      'image' : 'https://png.pngtree.com/svg/20161205/person_25302.png'
    },
    {
      'name' : 'Maria Aparecida',
      'ra' : '81712259',
      'image' : 'https://png.pngtree.com/svg/20161205/person_25302.png'
    },
    {
      'name' : 'Paulo Velozo',
      'ra' : '81712259',
      'image' : 'https://png.pngtree.com/svg/20161205/person_25302.png'
    },
    {
      'name' : 'Aron Bado',
      'ra' : '81712259',
      'image' : 'https://png.pngtree.com/svg/20161205/person_25302.png'
    },
    {
      'name' : 'Simas Turbando',
      'ra' : '81712259',
      'image' : 'https://png.pngtree.com/svg/20161205/person_25302.png'
    },
  ]

  public present = [];

  constructor(private navCtrl: NavController) { }

  public removeBy(index: number): void {
    this.cards.splice(index, 1);
  }

  public direction(event, index) {

    if (event) {
      this.present.push(this.cards[index])
      console.log(this.present)
    }

  }

  public goBack() {
    this.navCtrl.back();
  }

}
