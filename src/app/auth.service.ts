import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username, password){

    if(username === 'admin' && password === '12345'){
      localStorage.setItem('login', 'true');
      return true;
    } else {
      return false;
    }
  }

  logout(){
    localStorage.removeItem('login');
  }
}
