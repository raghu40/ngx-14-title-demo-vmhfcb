import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatComponent } from './concat.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
 
 

const routes:Routes= [
  {
    path: '',
    component: ConcatComponent,
    children:[
      { path: 'mydetails', loadChildren: () => import('./mydetails/mydetails.module').then(m => m.MydetailsModule)}
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcatRoutingModule {}