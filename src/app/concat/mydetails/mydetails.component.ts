import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent implements OnInit {

  demo;

  @Input() sendData;
  @Output() updateData = new EventEmitter()
  
  constructor(private store: Store<any>) {
    //this.demo = store.select('contact');
  }

  removeFromTable(id) {
    
    this.sendData.forEach((data,i) => {
    
      if(data['id'] === id){
         this.sendData.splice(i,1);
      }
      
    })
    this.sendData.forEach((data, i) => {
      data['id'] = i +1;
    })
  }

  Update(data) {
    this.updateData.emit(data)
  }

  ngOnInit() {
  }

}