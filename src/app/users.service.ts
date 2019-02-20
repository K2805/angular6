import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  
   usersList(){
  	var url = 'http://api.qshore.com/users';
  	return this.http.get(url);
  }
   
  
   createuser(form){
  	var url = 'http://api.qshore.com/add-user';
  	var data = {
  		fname: form.value.fname,
		lname:form.value.lastname,
		age:form.value.age,
		email:form.value.email,
		password:form.value.password
  	}
  	return this.http.post(url, data);
  }
  
  checkLogin(form){
    var un = form.value.username;
    var pwd = form.value.password;
  	var url = 'http://dev.dims.com.my/login/'+un+pwd;
  	
  }
  
  
  deleteUsers(id){
	var url = 'http://api.qshore.com/delete-user/'+id;
	return this.http.delete(url);
  }
  
  
  
}
