import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  activted:any = "active"
  @Output() newItemEvent = new EventEmitter<any>();
  table:any[]=[]
  constructor(private route:Router,private api : ServiceService){}
  

  ngOnInit():void{
  }
  addItems(){
    this.newItemEvent.emit('createneworder')
  }

    activated(event:any){
    console.log(event,"event")
    this.activted = event
   }

      achived(event:any){
        console.log(event,"eb");
        
      this.activted = event
       }

}