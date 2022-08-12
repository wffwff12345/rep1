import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewslistService {

  constructor(private http:HttpClient) { }
  list(data:any){
    const url="/user/news/list";
    return this.http.post(url,data);
  }
  delete(id:number){
    const url=`/user/news/delete/${id}`
    return this.http.delete(url);
  }
}
