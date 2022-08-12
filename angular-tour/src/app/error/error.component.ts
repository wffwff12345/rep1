import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private router:Router) { }
  time=5
  ngOnInit(): void {
  let id=setInterval(()=>{
      this.time--
      if(this.time==0){
        this.router.navigate(['/login'])
        clearInterval(id)
      }
    },1000)
  }

}
