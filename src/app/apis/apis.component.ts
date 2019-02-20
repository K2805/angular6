import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'


@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
  providers:[UsersService]
})
export class ApisComponent implements OnInit {
  usersDetails:any;
  res:any;	
  constructor(private user:UsersService) { }

  ngOnInit() {
	this.usersList();
  }
  usersList(){
	this.user.usersList().subscribe((res:any)=>{
		this.usersDetails = res.data;
	
	})
  }  
 
  deleteUser(id:number){
	if(confirm('Are you sure want to Delete ?')){
		this.user.deleteUsers(id).subscribe((res:any)=>{
			this.res = res;
			this.usersList();
		})
	} else {
		return false;
	}
  }

  
  
}
