import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AuthService]
})
export class AppComponent implements OnInit {
  title = 'ANGULER PROJECT';
  login: any;

  constructor(private auth:AuthService, private route:Router){}
  
  ngOnInit(){
    this.login = localStorage.getItem('login');
  }

  logout(){
    this.auth.logout();
    this.route.navigate(['/login']);
  }

}
