import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
   
  getuser(data:any){
    const url="/admin/user/getusers"
    return this.http.post(url,data)
  }
  getByid(id:number){
    const url=`/admin/user/getByid/${id}`
    return this.http.get(url)
  }
  deleteuser(id:number){
    const url=`/admin/user/delete/${id}`
    return this.http.delete(url)

  }
  editor(data:any,id:number){
    const url=`/admin/user/put/${id}`
    return this.http.put(url,data)
  }
  changestatus(data:any,id:number){
    const url=`/admin/user/changestatus/${id}`
    return this.http.put(url,data)
  }
}
