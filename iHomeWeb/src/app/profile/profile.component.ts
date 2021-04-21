import { Component, OnInit } from '@angular/core';
import { Account, AccountServiceService } from '../service/account-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: Account = new Account('', '', '', '', '', '');
  constructor(private accountService: AccountServiceService) { }

  ngOnInit(): void {
    this.user = this.accountService.getLoginAccount();
  }

  update() {

  }
}
