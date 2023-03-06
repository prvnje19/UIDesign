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
  table:any[]=[]
  constructor(private route:Router,private api : ServiceService){}


  ngOnInit():void{
  }
  addItems(){
    this.newItemEvent.emit('createneworder')
  }



}
