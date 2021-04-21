import { Component, OnInit } from '@angular/core';
import { Account, AccountServiceService } from '../service/account-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: Account = new Account('', '', '', '', '', '', '');
  isUpdated = false;
  constructor(private accountService: AccountServiceService) { }

  ngOnInit(): void {
    this.user = this.accountService.getLoginAccount();
  }

  update() {
    this.accountService.updateAccount(this.user)
    .subscribe( data => {
      this.isUpdated = true;
      this.accountService.setLoginAccount(this.user);
    });

}

}
