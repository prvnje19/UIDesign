import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>();
  @Output() DataEmmit = new EventEmitter<any>();
  @Output() DataTransfer = new EventEmitter<any>();
  @Output() btnlabel = new EventEmitter<any>();
  Data: any;
  searchText:any;

  constructor(private api : ServiceService){}


  ngOnInit():void{
    this.getDetails()
  }


  getDetails(){
    this.api.getData().subscribe(res=>{
     this.Data = res;
     console.log(this.Data,'res1')
    })
  }

  addItems(){
    this.newItemEvent.emit('createneworder')
    
    this.btnlabel.emit('ADD TO CART')

  }

  handleGet(data:any){
    this.DataTransfer.emit(data)
    this.DataEmmit.emit('placeOrder')
  }


}
