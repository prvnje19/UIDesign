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
  constructor(){ }
  ngOnInit(): void {
    console.log(this.compName , "compname");

  }
  addBook(pageName: string) {
    this.compName =  pageName ;
    console.log('newBook', pageName);
  }
  config(pageName:string){
    this.SubCompName =  pageName ;
  }
}
