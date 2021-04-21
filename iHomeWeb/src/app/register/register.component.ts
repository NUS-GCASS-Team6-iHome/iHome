import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService, Account } from '../service/account-service.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  user: Account = new Account('', '', '', '', '', '');

  constructor(
    private accountService: AccountServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register(): void {
    this.accountService.register(this.user)
        .subscribe( data => {
          this.router.navigate(['register-success'])
        });

  };



}