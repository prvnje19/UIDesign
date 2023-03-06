import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/service/service.service';
import { dataModelObj } from './dataModelObj';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit  {

  @Output() newItemEvent = new EventEmitter<any>();
  @Output() DataTransfer = new EventEmitter<any>();

  @Input() Data:any;
  @Input() btnlabel:any;
  
  addDetails!: FormGroup;
  dataModelObj : dataModelObj = new dataModelObj();
  constructor(private route:Router, private fb: FormBuilder, private api: ServiceService){}

  ngOnInit(): void {
    this.addDetails = this.fb.group({
      glasstype: [''],
      section: [''],
      flaming: [''],
    });
    this.onedit();
    console.log(this.Data , "Data formsss");
    
  }
  

  handleChange(){
    this.newItemEvent.emit('placeOrder')
    this.dataModelObj.glasstype= this.addDetails.value.glasstype;
    this.dataModelObj.section=this.addDetails.value.section;
    this.dataModelObj.flaming=this.addDetails.value.flaming;
    this.api.addData(this.dataModelObj).subscribe((res:any)=>{
       console.log(res,'res1')
       const data = []
       data.push(res)
       console.log(data[0] , "data oinsideee");
       
       this.DataTransfer.emit(data[0])

       
    })
  }
  onedit(){
    this.dataModelObj.id = this.Data.id;
    this.addDetails.controls["glasstype"].setValue( this.Data.glasstype)
    this.addDetails.controls["section"].patchValue(this.Data.section)
    this.addDetails.controls["flaming"].setValue(this.Data.flaming)
  }
  handleUpdate(){
    console.log("update");
    this.dataModelObj.glasstype= this.addDetails.value.glasstype;
  this.dataModelObj.section=this.addDetails.value.section;
  this.dataModelObj.flaming=this.addDetails.value.flaming;


  this.api.editData(this.dataModelObj,this.dataModelObj.id).subscribe(res=>{    
    console.log(res , "resssssss update");
    
  })
  }


}
