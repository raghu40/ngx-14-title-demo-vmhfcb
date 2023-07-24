import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-insert-table',
  templateUrl: './insert-table.component.html',
  styleUrls: ['./insert-table.component.css'],
})
export class InsertTableComponent implements OnInit {
  getCustomerDetails:any;
  @Output() selectedRecord = new EventEmitter();
   constructor(private store: Store) {
    
  }

  ngOnInit() {
    this.store.select(state => state['customer']).subscribe(data => {
      this.getCustomerDetails = data;
    })
    
  }

  update(selectedRecord, index) {
   this.selectedRecord.emit(selectedRecord);
  }

  delete(selectedRecord,index){
    this.store.dispatch({type:'DELETE_CUSTOMER', payload: selectedRecord});
    if( this.getCustomerDetails.length > 0) {
      this.getCustomerDetails.forEach((data,index) => {
        data['id'] = index +1;
    })
    }
    
  }
}
