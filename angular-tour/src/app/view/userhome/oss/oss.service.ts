import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OssService {

  url='/user/picture/upload';
  constructor(private http:HttpClient) { }
  upload(data:any){
   
    return this.http.post(this.url,data);
    
  }
}
