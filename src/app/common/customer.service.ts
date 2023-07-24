import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class customer {
  firstName:string;
  lastName:string;
  emailAddress:string;
  address: {
    addressLine1:string;
    addressLine2:string;
    addressLine3:string;
    addressLine4:string;
    postCode:string;
  };

}

@Injectable()
export class CustomerService {

  customers:customer[] = [];


  constructor() { 

    this.customers = [ 
      {firstName: 'Raghvendra', lastName: 'Chaturvedula', emailAddress: 'Karteekit40@gmail.com', address: {addressLine1: 'Flat3',addressLine2:'Boleyn court', addressLine3:'St Annes rise', addressLine4:'Redhill', postCode:'RH1 1AD'}}
    ];
  }

  public getCustomers():Observable<customer[]> {
    return of(this.customers);
  }

}