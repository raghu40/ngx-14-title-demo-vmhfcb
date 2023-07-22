import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  myForm:FormGroup;
  contactData = [];
  private count = 0;
  isUpdate = false;
  constructor(private store: Store, public formBuilder:FormBuilder) { 
    this.myForm = this.formBuilder.group({
      id:[''],
      firstName:[''],
      lastName:['']
    })
  }

  addToStore() {
    if(this.myForm.value && this.isUpdate) {
      let formData = this.myForm.value;
     this.contactData.filter(data => {
      if(data['id'] == formData['id']){
        Object.assign(data, formData)
      }
     });
     this.isUpdate = false;
    } else {
     this.myForm.get('id').setValue(this.contactData.length + 1 ); 
     this.contactData.push(this.myForm.value);
     this.isUpdate = false

  }
   // this.store.dispatch({type:'ADD_RECORD', payload: this.myForm.value})
  }

  getUpdateData(data){
    this.myForm.patchValue(data);
    this.isUpdate = true;

  }

  ngOnInit() {
  }

}