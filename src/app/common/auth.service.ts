import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  public _loginData = new BehaviorSubject({});

  public getloginDetails;

  constructor() { 
    this._loginData.subscribe(data => {
      this.getloginDetails = data;
    })
  }

  login(data) {

    if(data['userName'] == this.getloginDetails['userName'] && data['password'] == this.getloginDetails['password']) {
      this._loginData.next({name:this.getloginDetails['userName'],valid: true});
    } else {
      this._loginData.next({valid: false});
    }

  }
  
  logout(){
    this._loginData.next({});
  }
}