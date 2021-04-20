import { Injectable } from '@angular/core';
import { Account } from './account-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username: string, password: string, account: Account) {
    if (username === account.username && password === account.password) {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('username')
  }
}
