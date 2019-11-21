import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListClassesComponent } from './list-classes.component';
import { MatExpansionModule } from '@angular/material/expansion'; 

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatExpansionModule,
    RouterModule.forChild([{ path: '', component: ListClassesComponent }])
  ],
  declarations: [ListClassesComponent]
})
export class ListClassesComponentModule {}
