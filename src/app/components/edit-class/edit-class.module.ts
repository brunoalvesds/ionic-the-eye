import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditClassComponent } from './edit-class.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    MatExpansionModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: EditClassComponent }])
  ],
  declarations: [EditClassComponent]
})
export class EditClassComponentModule {}
