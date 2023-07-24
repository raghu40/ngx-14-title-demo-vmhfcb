import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './common/auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Welcome to my Demo Project';
  isDisplayLogin = true;
  userName: string;
   public newdata = new BehaviorSubject({});
  constructor(private authservice: AuthService, private router: Router) {
    this.authservice._loginData.subscribe((data) => {
      if (data['valid'] == true) {
        this.isDisplayLogin = false;
        this.userName = 'Welcome ' + data['name'];
      } else {
        this.isDisplayLogin = true;
      }
    });
  }
  logout() {
    this.router.navigate(['/home']);
    this.isDisplayLogin = true;
    this.authservice._loginData.subscribe((data) => {
       data['valid']= false;
       data['name'] = '';
  });
}
}