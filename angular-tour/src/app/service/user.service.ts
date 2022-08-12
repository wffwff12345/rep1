import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  url1="/admin/user/getall";
  url2="/admin/admin/login";
  getall(date:any){
    return this.http.post(this.url1,date,{observe:'response',headers:new HttpHeaders({
     UserId:'1'
    })})
   
    }

  login(date:any){
    return this.http.post(this.url2,date,{observe:"response"})
  }
  view(date:any){
    alert(date)
  }
  }
  class User{
    code:number=0
    currentpage:number=0
    data: people={
      id: 0,
      name: '',
      age: 0,
      date: ''
    }
    message:string=''
    size:number=0
    total:number=0
  
  }
  class people {
    id: number = 0;
    name: string = "";
    age: number = 0;
    date: string = '';
  
  }