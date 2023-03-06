import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.css']
})
export class SubNavbarComponent implements OnInit {
 
  @Input() compName:any;
  @Output() newItemEvent = new EventEmitter<any>();

  headerName!:string;
  ngOnInit(): void {
    this.headerName = "Create a new order"
  }


  handleBack(){
    switch (this.compName) {
      case "createneworder":
        this.newItemEvent.emit('table')
        break;
        case "configPage":
          this.newItemEvent.emit('createneworder')
          break;
          case "forms":
            this.newItemEvent.emit('configPage')
            break;
            case "placeOrder":
              this.newItemEvent.emit('forms')
              break;
            
      default:
        break;
    }
    
  }

}
