import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Output() newItemEvent = new EventEmitter<any>();

  constructor(private route:Router){}

  addItems(){
    this.newItemEvent.emit('configPage')
    console.log("click");
    
  }



}
