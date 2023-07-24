import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { Store } from '@ngrx/store';
import { customer } from '../common/customer.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent implements OnInit {
  customerForm: FormGroup;
  customerRecords: any;

  customerData: customer[];
  isUpdate: Boolean = false;

  constructor(
    private formbuilder: FormBuilder,
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.customerForm = this.formbuilder.group({
      id: [''],
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
    this.store
      .select((state) => state['customer'])
      .subscribe((data) => {
        this.customerRecords = data;
      });

    this.customerData = this.route.snapshot.data['customerData'];
  }

  get firstName() {
    return this.customerForm.get('firstName');
  }

  submitForm() {
    console.log(this.customerForm.value);
    if (this.customerForm.value && this.isUpdate) {
         this.store.dispatch({
        type: 'UPDATE_CUSTOMER',
        payload: this.customerForm.value,
      });
      this.isUpdate = false;
    } else {
      this.customerForm.get('id').setValue(this.customerRecords.length + 1);
      this.store.dispatch({
        type: 'ADD_CUSTOMER',
        payload: this.customerForm.value,
      });
    }
    this.customerForm.reset();
  }

  selectedData(data) {
    this.customerForm.patchValue(data);
    this.isUpdate = true;
  }
}
