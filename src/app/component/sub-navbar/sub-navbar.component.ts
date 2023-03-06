import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.css']
})
export class SubNavbarComponent implements OnInit {
 
  @Input() compName:any;
  headerName!:string;
  ngOnInit(): void {
    this.headerName = "Create a new order"
  }


  handleBack(){
    console.log("black");
    // switch (this.pageName) {
    //   case "":
      
    //     break;
    
    //   default:
    //     break;
    // }
    
  }

}
