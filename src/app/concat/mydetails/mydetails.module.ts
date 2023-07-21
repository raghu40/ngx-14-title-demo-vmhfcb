import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MydetailsComponent } from './mydetails.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MydetailsComponent,
      },
    ]),
  ],
  declarations: []
})
export class MydetailsModule { }