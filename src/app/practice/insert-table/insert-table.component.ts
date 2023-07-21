import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-insert-table',
  templateUrl: './insert-table.component.html',
  styleUrls: ['./insert-table.component.css'],
})
export class InsertTableComponent implements OnInit {
  getCustomerDetails:Observable<any>;
  @Output() selectedRecord = new EventEmitter();
   constructor(private store: Store) {
    
  }

  ngOnInit() {
    this.getCustomerDetails = this.store.select(state => state['customer'])
    
  }

  update(selectedRecord, index) {
   this.selectedRecord.emit(selectedRecord);
  }

  delete(selectedRecord,index){
    this.store.dispatch({type:'DELETE_CUSTOMER', payload: index});
  }
}
