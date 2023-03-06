import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createneworder',
  templateUrl: './createneworder.component.html',
  styleUrls: ['./createneworder.component.css']
})
export class CreateneworderComponent {

  @Output() newItemEvent = new EventEmitter<any>();

  constructor(private route:Router){}

  addItems(){
    this.newItemEvent.emit('configPage')
  }
}
