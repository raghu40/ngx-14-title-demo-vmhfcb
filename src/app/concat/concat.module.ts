import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatComponent } from './concat.component';
import { RouterModule } from '@angular/router';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { ConcatRoutingModule } from './concat.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ConcatRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConcatComponent, MydetailsComponent],
})
export class ConcatModule {}
