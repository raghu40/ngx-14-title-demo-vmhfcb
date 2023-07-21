import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
    
  },
  {
    path: 'about-us',
    title: 'Frequently Asked Questions',
    loadChildren: () => import('./about-us/about-us.module').then((m) => m.AboutUsModule)
  },
  {
    path: 'concat',
    title: 'Concat Us',
    loadChildren: () => import('./concat/concat.module').then((m) => m.ConcatModule)
  },
  {
    path:'practice',
    loadChildren: () => import('./practice/practice.module').then(m => m.PracticeModule)
  },
  {path: '',pathMatch: 'full', redirectTo: 'practice'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }