import { Component, OnInit } from '@angular/core';
import { PicturelistService } from './picturelist.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-picturelist',
  templateUrl: './picturelist.component.html',
  styleUrls: ['./picturelist.component.css']
})
export class PicturelistComponent implements OnInit {

  constructor(private service:PicturelistService,private message:NzMessageService) { }
  list:result[]=[];
  ngOnInit(): void {
    this.listByStstus();
  }
  dto={
    page:1,
    size:4,
    status:'1'
  };
  total:any
  getdto ={
    name: '',
    page: 1,
    size: 5
  };
  listByStstus(){
    this.service.list(this.dto).subscribe((res: any) => {
      console.log(res.data)
      this.list=res.data;
      this.total=res.total;
      console.log(this.list);
    })
  }
  operation(id:number,status:number){
    console.log(id);
    console.log(typeof(status));
    this.service.collect(id,status).subscribe((res:any)=>{
     if(res.code==1001){
      this.message.success(`${status==1?'取消':''}收藏成功`)
      this.listByStstus();
     }else{
      this.message.error(res.message);
     }
    })
  }
  deletecancel(){
    this.message.info('已取消删除!')
  }
  delete(id:number){
    console.log(id)
    this.service.delete(id).subscribe((res:any)=>{
      if(res.code==1001){
        this.message.success("图片删除成功!");
        this.listByStstus();
      }
      else{
        this.message.error(res.message);
      }
    })
  }
}
interface result{
  id:number;
  url:string;
  createTime:string;
  type:number;
  status:number;

}
