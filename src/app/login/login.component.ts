import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../common/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userDetails = {
    userName: '',
    password: '',
  };
  unSuccess = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  submitForm(userEnterData) {
      this.authService.login(userEnterData);
    this.authService._loginData.subscribe((data) => {
      if (data['valid'] == true) {
        this.unSuccess = false;
        this.router.navigate(['/concat']);
      } else {
        this.unSuccess = true;
      }
    });
  }
}
