import { Component,Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../common/auth.service';
import { MustMatch } from '../helpers/must-match.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUPForm:FormGroup;
  success = false; 
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {

    this.signUPForm = this.fb.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(8),Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)]],
      repassword:['',[Validators.required, Validators.minLength(8),Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)]],
      emailAddress:['',[Validators.required, Validators.pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)]]
    },{
      validator: MustMatch('password', 'repassword')
    })
  }


  signup(){
   let signUpData = this.signUPForm.value;
     this.authService._loginData.next({userName:signUpData['userName'], password: signUpData['password']});
     this.success = true;
  }

}