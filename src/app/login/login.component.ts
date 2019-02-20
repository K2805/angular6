import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'
import {Router} from '@angular/router';
import {AuthService} from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  res:any;
  name:any;
  username:any;
  password:any;
  showError:boolean = false;

  constructor(private auth:AuthService, private route:Router) { }

  ngOnInit() {
  }
  checkLogin(form){
    this.showError = false;
    if(!this.auth.login(this.username, this.password)){
      this.showError = true;
    }
    this.route.navigate(['/home']);
    
	// this.user.checkLogin(form).subscribe((res:any)=>{  		
  // 		this.router.navigate(['/home']) 
  // 	})
	
  }
}
