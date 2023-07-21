import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent implements OnInit {
  customerForm: FormGroup;
  customerRecords:any;

  constructor(private formbuilder: FormBuilder, private store: Store) {
    this.customerForm = this.formbuilder.group({
      id:[''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required]],
      address: this.formbuilder.group({
        addressLine1: ['', [Validators.required]],
        addressLine2: [],
        addressLine3: [],
        addressLine4: [],
        postCode: ['', [Validators.required]],
      }),
    });
  }

  ngOnInit() {
    this.store.select(state => state['customer']).subscribe(data => {
      this.customerRecords = data;
    } )

  
  }

  get firstName() {
    return this.customerForm.get('firstName');
  }

  submitForm() {
    console.log(this.customerForm.value);
    if(this.customerRecords.length > 0) {
    let customer =  ( this.customerRecords.filter(data => data['id'] == this.customerForm.get('id').value));
    if(customer.length == 1) {
       
      Object.assign(this.customerRecords,[this.customerForm.value]);
    }
    }
    this.customerForm.get('id').setValue(this.customerRecords.length + 1);
    this.store.dispatch({
      type: 'ADD_CUSTOMER',
      payload: this.customerForm.value,
    });
    this.customerForm.reset();
  }

  selectedData(data){
   this.customerForm.patchValue(data)
  }
}
