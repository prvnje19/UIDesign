import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable,of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  addData(data : any){
    return this.http.post<any>("http://localhost:3000/posts",data)
     }


  getData(){
    return this.http.get<any>("http://localhost:3000/posts")
   
  }


  editData(data : any,id :number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
   
  }

  
  deleteData(id : number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
   
  }

}
