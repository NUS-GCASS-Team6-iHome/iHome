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

  ROOT_URI:String = "http://52.221.181.158:8097/"

  constructor(private httpClient: HttpClient) { }

  setLoginAccount(account: Account) {
    this.loginAccount = account;
  }

  getLoginAccount() {
    return this.loginAccount;
  }

  public register(account: Account) {
    return this.httpClient.post<Account>( this.ROOT_URI + "account/", account)
  }

  public getAccount(username: string) {
    return this.httpClient.get<Account>(this.ROOT_URI +'account' + "/" + username);
  }

  public updateAccount(account: Account) {
    return this.httpClient.put<Account>(this.ROOT_URI + "account/", account)
  }
}
