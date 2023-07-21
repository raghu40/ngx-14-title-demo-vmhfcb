import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatComponent } from './concat.component';
import { RouterModule } from '@angular/router';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { ConcatRoutingModule } from './concat.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ConcatRoutingModule,
  ],
  declarations: [ConcatComponent, MydetailsComponent],
})
export class ConcatModule {}
