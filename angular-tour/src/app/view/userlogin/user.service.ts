import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="/user/user/login";

  constructor(private http:HttpClient) { }

  login(date:any){
    return this.http.post(this.url,date,{headers:{
      login:'islogin'
    }})
  }
}
