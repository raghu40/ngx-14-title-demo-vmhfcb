import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from './customer.service';

@Injectable()
export class ProductListResolveServiceService implements Resolve<any> {

  constructor(private customerService:CustomerService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {

      return this.customerService.getCustomers();
}

}