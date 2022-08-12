import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  constructor(private router:Router) { }
  logout() {
    localStorage.removeItem("token")
    this.router.navigate(['/login'])
   }
  ngOnInit(): void {
  }

}
