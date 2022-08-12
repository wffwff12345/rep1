import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewseditorService {

  constructor(private http:HttpClient) { }
  insert(data:any){
    const url="user/news/insert";
    return this.http.post(url,data);
  }
  list(data:any){
    const url='/user/picture/list';
    return this.http.post(url,data);
  }
  getOne(id:number){
    const url=`/user/news/get/${id}`;
    return this.http.get(url);
  }
}
