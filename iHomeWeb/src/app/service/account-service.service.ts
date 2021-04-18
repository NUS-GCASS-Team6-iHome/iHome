import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class Account {
  constructor(
    // public  accountid: number,
    public  username: string,
    public  email: string,
    public  address: string,
    public  mobile: string,
    public  usertype: string,
    public  password: string,
  ) {
  }
}
@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private httpClient: HttpClient) { }

  public register(account: Account) {
    return this.httpClient.post<Account>("http://localhost:9001/account/", account)
  }
}
