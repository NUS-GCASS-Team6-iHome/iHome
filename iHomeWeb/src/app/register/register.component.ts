import { Component, OnInit } from '@angular/core';
import { AccountServiceService, Account } from '../service/account-service.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  user: Account = new Account('', '', '', '', '', '');

  constructor(
    private accountService: AccountServiceService
  ) { }

  ngOnInit() {
  }

  register(): void {
    console.log('print: ' + JSON.stringify(this.user))
    this.accountService.register(this.user)
        .subscribe( data => {
          alert("Account created successfully.");
        });

  };



}