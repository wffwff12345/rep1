import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url1="/admin/admin/login";

  constructor(private http:HttpClient) { }

  login(date:any){
    return this.http.post(this.url1,date,{headers:{
      login:'islogin'
    }})
  }
}
