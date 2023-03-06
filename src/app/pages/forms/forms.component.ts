import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  @Output() newItemEvent = new EventEmitter<any>();

  constructor(private route:Router){}

  handleChange(){
    this.newItemEvent.emit('placeOrder')
  }
  

}
