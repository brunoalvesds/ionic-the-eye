import { Component, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'modal-page',
  templateUrl: './modal.page.html',
})
export class ModalPage {

  @Input() registroAluno: number;
  ra;

  constructor(navParams: NavParams, private modalCtrl: ModalController) {
    this.ra = navParams.get('RA');
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}