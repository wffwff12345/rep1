import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PicturelistService {

  constructor(private http:HttpClient) { }
  list(data:any){
    const url='/user/picture/list';
    return this.http.post(url,data);
  }
  getuser(data:any){
    const url="/admin/user/getusers";
    return this.http.post(url,data);
  }
  collect(id:number,status:number){
    const url=`/user/picture/update/${id}`;
    return this.http.put(url,{'status':status});
  }
  delete(id:number){
    const url=`/user/picture/delete/${id}`;
    return this.http.delete(url);
  }

}
