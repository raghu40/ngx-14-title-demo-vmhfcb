import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { RouterModule } from '@angular/router';
import { PracticeComponent } from './practice.component';
import { InsertTableComponent } from './insert-table/insert-table.component';
import { ReactiveFormsModule } from '@angular/forms';
 

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '', component: PracticeComponent,children: [{
        path:'insert-table', component: InsertTableComponent
      }]
    }]),
  ],
  declarations: [PracticeComponent, InsertTableComponent],
})
export class PracticeModule {}
