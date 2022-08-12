import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PicturelistService } from './picturelist.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private service:PicturelistService,private message:NzMessageService) { }
  show=false;
  uploadpic=false;
  ediId=0;
  ediId2=0;
  ngOnInit(): void {
    console.log(this.content)
    if(this.content.length==0){
      this.content=[{type:"text",content:null}];
    }
    console.log(this.content)
  }
  controller:Texts={
    title: null,
    key: 0,
    texts: null
  }
  text={
    addText:"新增文本",
    editorText:"编辑文本",
  }
  picture={
    addPicture:"新增图片",
    editorPicture:"编辑图片",
  }
  content:Content[]=[];
  isVisible=false;
  isVisible2=false;
  list:result[]=[];
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
  url:any;
  showModal(key:number){
    this.isVisible=true;
    this.ediId=key

  }
  showModal2(key:number){
    this.isVisible2=true;
    this.ediId2=key ;

  }
  close(){
    this.isVisible=false;
  }
  close2(){
    this.isVisible2=false;
  }
  addText(id:number){
    console.log("新增文字")
    this.controller.key=id;
    this.controller.title=this.text.addText;
    this.controller.texts='';
    this.show=true;
  }
 
  addImage(id:number){
    console.log("新增图片");
    this.uploadpic=true;
    this.listByStstus();
    this.controller.key=id;
    this.controller.title=this.picture.addPicture;
    this.controller.texts='';
  }
  editor1(id:number){ 
    console.log("编辑文字")
    this.controller.key=id;
    this.controller.title=this.text.editorText;
    this.controller.texts=this.content[id].content;
    this.show=true;
  }
  Tp(id:number){
    this.isVisible=false;
    this.editor2(id);
  }
  Pt(id:number){
    this.isVisible2=false;
    this.editor1(id);
    this.controller.texts='';
    
  }
  editor2(id:number){
    console.log("编辑图片");
    this.uploadpic=true;
    this.listByStstus();
    this.controller.key=id;
    this.controller.title=this.picture.editorPicture;
    
  }
  cancelText(){
    this.show=false;
  }
  saveText(){
    if(this.controller.title==this.text.editorText){
      this.content.splice(this.controller.key,1,{type:"text",content:this.controller.texts});
      this.show=false;
      console.log(this.content);
    }
    else{
      this.content.splice(this.controller.key,0,{type:"text",content:this.controller.texts});
      this.show=false;
      console.log(this.content);
    }
  }
  saveImage(){
    if(this.controller.title==this.picture.addPicture){
      this.content.splice(this.controller.key,0,{type:"image",content:this.controller.texts});
      this.uploadpic=false;
      console.log(this.content);
    }
    else{
      this.content.splice(this.controller.key,1,{type:"image",content:this.controller.texts});
      this.uploadpic=false;
      console.log(this.content);
    }
  }

  delete(id:number){
    this.content.splice(id,1);
  }

  getContent(){
    return JSON.stringify(this.content);
  }
  cancel(){
    this.content.splice(this.content.length-1,1);
  }

  listByStstus(){
    this.service.list(this.dto).subscribe((res: any) => {
      console.log(res.data)
      this.list=res.data;
      this.total=res.total;
      console.log(this.list);
    })
  }

  picCancel(){
    this.uploadpic=false;
  }
  image(url:string){
    this.controller.texts=url;
  }
  test(){
    console.log(this.content);
  }
  setcontent(data:content[]){
    if (data.length > 0) {
      this.content = data;
      console.log(this.content)
    }
    else {
      this.content =[{type:"text",content:null}];
      }
  }

}

interface Content{
  type:string,
  content:any
}
interface Texts{
  title:string|null,
  key:number
  texts:string|null
}
interface result{
  id:number;
  url:string;
  createTime:string;
  type:number;
  status:number;

}
interface content{
  type:string;
  content:string|null;
}

