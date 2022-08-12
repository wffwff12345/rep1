import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  constructor(private router:Router,private location:Location){}
  ngOnInit(){  
}
  login() {
    this.router.navigate(['/login'])
  }
  register() {
    this.router.navigate(['/register'])
  }
  back(){
    this.router.navigate(['/base'])
  }
}
