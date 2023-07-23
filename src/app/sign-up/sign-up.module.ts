import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
 
import { SignUpComponent } from './sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../common/auth.service';
import { RequiredFieldComponent } from '../shared/required-field/required-field.component';
import { RequiredPasswordComponent } from '../shared/required-password/required-password.component';
import { RequiredEmailComponent } from '../shared/required-email/required-email.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignUpComponent
      }
    ])
  ],
  declarations: [SignUpComponent, RequiredFieldComponent, RequiredPasswordComponent, RequiredEmailComponent],
  providers:[]
})
export class SignUpModule { }