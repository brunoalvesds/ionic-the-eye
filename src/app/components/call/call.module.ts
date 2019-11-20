import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CallComponent } from './call.component';

import {SwipeCardLibModule} from 'ng-swipe-card';
import {SW_SWIPE_CARD_DEFAULT_OPTIONS} from 'ng-swipe-card';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CallComponent }]),
    SwipeCardLibModule
  ],
  declarations: [CallComponent],
  providers: [{
    provide: SW_SWIPE_CARD_DEFAULT_OPTIONS,
    useValue: {likeColor: '0, 255, 0', dislikeColor: '255, 0 , 0'}
  }]
})
export class CallComponentModule {}
