import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NewslistService } from './newslist.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {

  constructor(private service:NewslistService,private message:NzMessageService,private router:Router) { }
  list:result[]=[];
  ngOnInit(): void {
    this.listBycondition();
  }
  dto={
    page:1,
    size:4,
    title:'',
  };
  cover:string[]=[];
  pic='';
  total:any
  getdto ={
    name: '',
    page: 1,
    size: 5
  };
  clean(){
    this.dto.title=''
    this.listBycondition();
  }
  search(){
    this.listBycondition();
  }
  listBycondition(){
    this.service.list(this.dto).subscribe((res: any) => {
      console.log(res)
      console.log(res.data);
      this.list=res.data;
      this.total=res.total;
      this.getImages(res.data.type,res.data.cover);
    })
  }
  getImages(type:number,image:string){
    if(type==1){
      this.pic=image;
    }else if(type==3){
      const images:string[]=image.split(",");
      this.cover=[...images]
    }
    this.pic=this.cover[0];
    console.log('pic')
    console.log(this.pic)
  }
  info(id:number){
    this.router.navigate(['/uhome/newInfo/',id]);
  }
  editor(id:number){
    console.log(id)
    this.router.navigate(['/uhome/newseditor'],{
      queryParams:{id:id}
    })
  }
  editorcancel(){
    this.message.info('已取消编辑!')
  }
  deletecancel(){
    this.message.info('已取消删除!')
  }
  delete(id:number){
    console.log('删除新闻');
    this.service.delete(id).subscribe((res:any)=>{
    if(res.code==1001){
      this.message.success("成功删除该新闻");
      this.listBycondition();
    }
    else{
      this.message.error("删除新闻失败");
    }
    })

  }
}
interface result{
  id:number;
  author:string;
  channel:string
  title:string;
  cover:string;
  content:string;
  type:number;
  createTime:string;

}