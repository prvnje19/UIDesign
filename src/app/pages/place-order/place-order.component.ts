import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
  constructor(private service:ServiceService){}
  ngOnInit(): void {
    
  }
  addMore(){
    this.newItemEvent.emit('createneworder')
  }

  handleOrder(){
    this.newItemEvent.emit('table')
  }

}
