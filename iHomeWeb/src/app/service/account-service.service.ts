import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Account {
  constructor(
    public accountid: string,
    public username: string,
    public email: string,
    public address: string,
    public mobile: string,
    public usertype: string,
    public password: string
  ) {
  }
}
@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  private loginAccount = new Account('', '', '', '', '', '', '');

  constructor(private httpClient: HttpClient) { }

  setLoginAccount(account: Account) {
    this.loginAccount = account;
  }

  getLoginAccount() {
    return this.loginAccount;
  }

  public register(account: Account) {
    return this.httpClient.post<Account>("http://localhost:9003/account/", account)
  }

  public getAccount(username: string) {
    return this.httpClient.get<Account>('http://localhost:9003/account' + "/" + username);
  }

  public updateAccount(account: Account) {
    return this.httpClient.put<Account>("http://localhost:9003/account/", account)
  }
}
