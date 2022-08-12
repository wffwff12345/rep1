import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private service:HttpClient) { }
  adduser(data:any){
    const url="/admin/user/post"
    return this.service.post(url,data)
  }
}
