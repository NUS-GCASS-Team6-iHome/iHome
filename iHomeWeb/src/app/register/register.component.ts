import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService, Account } from '../service/account-service.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  user: Account = new Account('', '', '', '', '', '', '');
  isUsernameExist = false;
  constructor(
    private accountService: AccountServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register(): void {
    // check whether username is existed
    this.accountService.getAccount(this.user.username).subscribe(
      response => this.handleGetAccountSuccess(response),
    );
  };

  handleGetAccountSuccess(response: Account) {
    const account = response;
    if (account) {
      this.isUsernameExist = true;
    } else {
      this.isUsernameExist = false;
      this.accountService.register(this.user)
        .subscribe(data => {
          this.router.navigate(['register-success'])
        });
    }
  }

}