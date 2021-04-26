import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService, Payment } from '../service/payment.service';
import { AccountServiceService } from '../service/account-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  payment : Payment = new Payment('', '', '', 0);
  accountId = '';

  constructor(
      private paymentService: PaymentService,
      private router: Router,
      private accountService: AccountServiceService
  ) { }

  ngOnInit(): void {
  this.accountId = this.accountService.getLoginAccount().accountid;
  }

  submitPayment(): void {
  console.log(this.payment);
      this.paymentService.createPayment(this.payment)
          .subscribe( data => {
            this.router.navigate(['payment-success'])
          });

    };

}
