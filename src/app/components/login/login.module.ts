import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }])
  ],
  declarations: [LoginComponent]
})
<<<<<<< HEAD
export class LoginModule {}
=======

export class LoginComponentModule {}
>>>>>>> ad2ed6eeb6fe6bda8bf07daa7ceeeb722e2e114d
