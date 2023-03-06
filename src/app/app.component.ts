import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit  {
  title = 'uiDesign';
  routeName:any;
  compName = "table"
  SubCompName="createneworder"
  Data:any
  btnlabel!:string;
  constructor(){ }
  ngOnInit(): void {
      console.log(this.Data , "data render");
      
  }
  transferData(data:any){
    console.log(data , "app");
    this.Data = data
  }
  placeOrderData(pageName: string){
    this.compName =  pageName ;
    this.SubCompName =  pageName ;
  }
  addBook(pageName: string) {
    this.compName =  pageName ;
    if(pageName === "formsDelete"){
      this.compName = "table"
    }
    if(pageName === "formsEdit"){
      console.log("formsss");
      
      this.SubCompName="forms"
    }
    if(pageName === "createneworder"){
      this.SubCompName="createneworder"
    }
  }
  config(pageName:string){
  
    
    this.SubCompName =  pageName ;
  }
  buttonlable(label:any){
    this.btnlabel = label
  }
  btnlabels(label:any){
    this.btnlabel = label
  }
}
