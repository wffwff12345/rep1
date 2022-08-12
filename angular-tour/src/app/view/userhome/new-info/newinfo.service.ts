import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewinfoService {

  constructor(private http:HttpClient) { }
  getOne(id:number){
    const url=`user/news/get/${id}`;
    return this.http.get(url)
  }
}
