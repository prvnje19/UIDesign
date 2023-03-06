import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-configure-door',
  templateUrl: './configure-door.component.html',
  styleUrls: ['./configure-door.component.css']
})
export class ConfigureDoorComponent {
  @Output() newItemEvent = new EventEmitter<any>();

  constructor(){}

  handleClick(){
    this.newItemEvent.emit('forms')
  }

}
