import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account, AccountServiceService } from '../service/account-service.service';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false
  accountNotFound = false
  loginAccount = new Account('', '', '', '', '', '', '')

  constructor(private router: Router,
    private loginservice: AuthenticationService,
    private accountService: AccountServiceService) { }

  ngOnInit(): void {
  }
  checkLogin() {
    this.accountService.getAccount(this.username).subscribe(
      response => this.handleGetAccountSuccess(response),
    );

  }

  handleGetAccountSuccess(response: Account) {
    this.loginAccount = response;
    this.accountService.setLoginAccount(this.loginAccount);
    if (this.loginAccount) {
      this.accountNotFound = false;
      if (this.loginservice.authenticate(this.username, this.password, this.loginAccount)
      ) {
        this.router.navigate(['home'])
        this.invalidLogin = false
      } else
        this.invalidLogin = true
    } else {
      this.accountNotFound = true;
    }
  }

}
