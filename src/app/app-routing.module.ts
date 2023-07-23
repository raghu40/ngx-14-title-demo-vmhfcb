import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidationGuardGuard } from './validation-guard.guard';

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
    loadChildren: () => import('./concat/concat.module').then((m) => m.ConcatModule),
    canActivate:[ValidationGuardGuard]
  },
  {
    path:'practice',
    loadChildren: () => import('./practice/practice.module').then(m => m.PracticeModule)
  },
  {
    path:'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {path: '',pathMatch: 'full', redirectTo: 'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ValidationGuardGuard]
})
export class AppRoutingModule { }