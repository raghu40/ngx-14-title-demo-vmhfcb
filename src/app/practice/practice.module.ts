import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PracticeComponent } from './practice.component';
import { InsertTableComponent } from './insert-table/insert-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListResolveServiceService } from '../common/product-list-resolve-service.service';
import { CustomerService } from '../common/customer.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PracticeComponent,
        children: [
          {
            path: 'insert-table',
            component: InsertTableComponent,
          },
        ],
        resolve: { customerData: ProductListResolveServiceService },
      },
    ]),
  ],
  declarations: [PracticeComponent, InsertTableComponent],
  providers: [ProductListResolveServiceService, CustomerService],
})
export class PracticeModule {}
