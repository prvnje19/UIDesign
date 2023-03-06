import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
  @Output() buttonlable = new EventEmitter<any>();
  @Input() Data:any;
  @Input() addedData:any;
  

  Datas: any;
  prodId:any
  
  constructor(private api:ServiceService){}
  ngOnInit(): void {
    this.getDetails();
    console.log(this.addedData , "addedDataaddedData");
    
  }

  getDetails(){
    this.api.getData().subscribe(res=>{
     this.Datas = res;
    })
  }

  
  addMore(){
    this.newItemEvent.emit('createneworder')
  }

  handleOrder(){
    this.newItemEvent.emit('table')
  }

  handleEdit(id:any){
    this.newItemEvent.emit('formsEdit')
    this.buttonlable.emit('Update')
  }

  handleDelete(id:any){
    this.newItemEvent.emit('formsDelete');
    this.api.deleteData(this.Data.id).subscribe(res=>{
    })
    
  }
}
