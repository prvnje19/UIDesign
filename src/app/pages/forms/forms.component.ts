import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit  {

  @Output() newItemEvent = new EventEmitter<any>();
  addDetails!: FormGroup;
  countries:any[] = [];

  constructor(private route:Router, private fb: FormBuilder, private api: ServiceService){}

  ngOnInit(): void {
    console.log("render");
    
    this.addDetails = this.fb.group({
      glasstype: [''],
      section: [''],
      flaming: [''],
    });
  }
  

  handleChange(){
    this.newItemEvent.emit('placeOrder')
  }
  

}
